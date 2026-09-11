package com.ats.geospatial;

public final class SurveyProjectReferenceService {

    private SurveyProjectReferenceService() {
        // Y1 Day 5.3: ATS-Y1-005 reference-semantics operations are exposed as utility methods
    }

    // Y1 Day 5.4: ATS-Y1-005 Java passes a copy of the object reference, so object mutation remains visible
    public static void addEstimatedRecords(SurveyProject project, int additionalRecords) {
        project.setEstimatedRecords(project.getEstimatedRecords() + additionalRecords);
    }

    // Y1 Day 5.5: ATS-Y1-005 reassigning the copied reference does not replace the caller's reference
    public static void tryReplaceProject(SurveyProject project) {
        project = new SurveyProject("LOCAL-REPLACEMENT", 1);
        System.out.println("Inside replacement project: " + project.getProjectCode());
    }

    // Y1 Day 5.6: ATS-Y1-005 guard a generic reference with instanceof before narrowing the reference type
    public static SurveyProject requireSurveyProject(Object candidate) {
        if (!(candidate instanceof SurveyProject)) {
            throw new IllegalArgumentException("Expected SurveyProject candidate");
        }
        return (SurveyProject) candidate;
    }
}
