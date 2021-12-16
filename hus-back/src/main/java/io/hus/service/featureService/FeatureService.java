package io.hus.service.featureService;

import io.hus.entity.featureEntity.Feature;

import java.util.List;

public interface FeatureService {

    public Feature createFeature(Feature image);

    public Feature updateFeature(Feature image);

    public void deleteFeature(Long id);

    public Feature getFeature(Long id);

    public List<Feature> getFeatures();
}
