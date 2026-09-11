package com.ats.geospatial;

public class SurveyProject {

    // Y1 Day 5.2: ATS-Y1-005 introduce the first domain object with reference-backed project state
    private String projectCode;
    private int estimatedRecords;

    public SurveyProject(String projectCode, int estimatedRecords) {
        this.projectCode = projectCode;
        this.estimatedRecords = estimatedRecords;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public int getEstimatedRecords() {
        return estimatedRecords;
    }

    public void setEstimatedRecords(int estimatedRecords) {
        this.estimatedRecords = estimatedRecords;
    }
}
