import { FeaturesProductStyled } from "./FeaturesProductStyled";
import { selectFeatureIcon } from "../utils";

export default function FeaturesProduct({ features }) {
  return (
    <FeaturesProductStyled>
      <div className="feature_product_heading">
        <h3>¿Qué ofrece este lugar?</h3>
      </div>
      <div className="feature_product_item_container">
        {features?.map(({ id, icon, name }, i) => (
          <div className="feature_product_item" key={`${i}-${id}`}>
            <span className="feature_product_icon">
              {selectFeatureIcon(icon)}
            </span>
            <span className="feature_product_title" data-testid="featureName">
              {name}
            </span>
          </div>
        ))}
      </div>
    </FeaturesProductStyled>
  );
}
