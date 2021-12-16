package io.hus.controller.productController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.hus.controller.categoryController.ErrorMessage;
import io.hus.entity.categoryEntity.Category;
import io.hus.entity.imageEntity.Image;
import io.hus.entity.productEntity.Product;
import io.hus.service.categoryService.CategoryService;
import io.hus.service.cityService.CityService;
import io.hus.service.imageService.ImageService;
import io.hus.service.productService.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping(value = "/api")
@RequiredArgsConstructor
@SecurityRequirement(name = "javainuseapi")
public class ProductController {

    private final ProductService productService;
    private final ImageService imageService;
    private final CategoryService categoryService;
    private final CityService cityService;

    @Operation(summary = "AWS Health check")
    @GetMapping(value = "status")
    public String checkStatus() {
        return "ok";
    }

    @Operation(summary = "List all products")
    @GetMapping(value = "/open/products")
    public ResponseEntity<List<Product>> listProducts() {
        List<Product> products = new ArrayList<>();
        products = productService.getProducts();
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @Operation(summary = "Eight products in random order")
    @GetMapping(value = "/open/products/random")
    public ResponseEntity<List<Product>> listProductsRandom() {
        List<Product> products = new ArrayList<>();
        products = productService.getProductsRandom();
        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }


    @Operation(summary = "Delete a product")
    @DeleteMapping(value = "/product/{id}")
    public ResponseEntity<Product> deleteProduct(@PathVariable("id") Long id) {
        Optional<Product> product = productService.getProduct(id);
        if (product.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        productService.deleteProduct(id);

//        Delete all images of this product
//        product.get().getImages().forEach(image -> imageService.deleteImage(image.getId()));
//        Reemplazado por orphanRemoval = true en el modelo de product

        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Get a product")
    @GetMapping(value = "/open/product/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") Long id) {
        Optional<Product> product = productService.getProduct(id);
        if (product.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(product.get());
    }

    @Operation(summary = "Get products by city")
    @GetMapping(value = "/open/products/city/{city}")
    public ResponseEntity<List<Product>> getProductByCity(@PathVariable("city") String city) {
        List<Product> products = new ArrayList<>();
        products = productService.getProductByCity(cityService.getCityByName(city));

        if (products.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(products);
    }

    @Operation(summary = "Get products by category")
    @GetMapping(value = "/open/products/category/{category}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable("category") String category) {
        List<Product> products = new ArrayList<>();
        products = productService.getProductByCategory(categoryService.findByTitle(category));
        if (products.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(products);
    }

    @Operation(summary = "Get products available by city and / or date")
    @GetMapping(value = "open/products/dates")
    public ResponseEntity<List<Product>> getProductsAvailableByDates(@RequestParam(value = "startDate",
            required = false) String startDate, @RequestParam(value = "endDate", required = false) String endDate,
                                                                     @RequestParam(value = "city", required = false) String city) {

        if (startDate != null && endDate != null && city == null) {

            LocalDate start = LocalDate.parse(startDate);
            LocalDate end = LocalDate.parse(endDate);
            if (start.isAfter(end)) {
                return ResponseEntity.badRequest().build();
            }

            List<Product> products = new ArrayList<>();

            productService.getProducts().forEach(product -> {
                if (productService.getProductsDisableByDates(startDate, endDate, product.getId()).isEmpty()) {
                    products.add(product);
                }
            });
            return ResponseEntity.ok(products);
        } else if (startDate != null && endDate != null) {
            LocalDate start = LocalDate.parse(startDate);
            LocalDate end = LocalDate.parse(endDate);
            if (start.isAfter(end)) {
                return ResponseEntity.badRequest().build();
            }

            List<Product> products = new ArrayList<>();

            productService.getProducts().forEach(product -> {
                if (productService.getProductsDisableByDates(startDate, endDate, product.getId()).isEmpty() && product.getCity().getName().equalsIgnoreCase(city) ) {
                    products.add(product);
                }
            });
            return ResponseEntity.ok(products);
        } else if (startDate == null && endDate == null && city != null) {

            List<Product> products = new ArrayList<>();
            products = productService.getProductByCity(cityService.getCityByName(city));

            if (products.isEmpty()) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(products);
        }
        return ResponseEntity.badRequest().build();
    }


    @Operation(summary = "Get 8 products by page")
    @GetMapping(value = "/open/products/page/{page}")
    public ResponseEntity<List<Product>> getProductByPages(@PathVariable("page") Integer page) {

        if (page < 1) {
            return ResponseEntity.badRequest().build();
        }

        Integer pageSize = 8;
        Integer temporalPage = page - 1;

        List<Product> products;

        products = productService.getProductByPages(temporalPage, pageSize);

        if (products.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(products);
    }

    @Operation(summary = "Update a product")
    @PutMapping(value = "/product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long id,
                                                 @RequestBody Product product
    ) {
        if (product.getName() == null || product.getDescription() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Optional<Product> productDB = productService.getProduct(id);
        if (productDB.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Product updateProduct = product;
        updateProduct.setId(id);
        updateProduct = productService.updateProduct(updateProduct);
        return ResponseEntity.ok(updateProduct);
    }

    // TODO: access endpoint no deben especificar acciones, estan se manejan con los metodos
    @Operation(summary = "Create a new product")
    @PostMapping(value = "/product/save")
    public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product,
                                                 BindingResult result) {

        if (product.getName() == null || product.getDescription() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        if (result.hasErrors()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, this.formatMessage(result));
        }
        product.setId(null);
        Product productCreate = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productCreate);
    }

    private String formatMessage(BindingResult result) {
        List<Map<String, String>> errors = result.getFieldErrors().stream()
                .map(err -> {
                    Map<String, String> error = new HashMap<>();
                    error.put(err.getField(), err.getDefaultMessage());
                    return error;

                }).collect(Collectors.toList());
        ErrorMessage errorMessage = ErrorMessage.builder()
                .code("01")
                .messages(errors).build();
        ObjectMapper mapper = new ObjectMapper();
        String jsonString = "";
        try {
            jsonString = mapper.writeValueAsString(errorMessage);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return jsonString;
    }

}
