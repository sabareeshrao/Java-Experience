package com.ats.geospatial;

public class GeospatialOperationsApplication {

    // Y1 Day 1.4: ATS-Y1-001 establish the first runnable application entry point
    public static void main(String[] args) {

        // Y1 Day 1.5: ATS-Y1-001 make startup verification visible in the console
        String applicationName = "Geospatial Operations Tracking System";
        String startupStatus = "Application started successfully.";

        System.out.println(applicationName);

        // Y1 Day 2.4: ATS-Y1-002 expose runtime details needed during workstation troubleshooting
        RuntimeEnvironmentReport.print();

        // Y1 Day 3.2: ATS-Y1-003 prove that launcher arguments arrive through String[] args
        System.out.println("Startup argument count: " + args.length);
        if (args.length > 0) {
            System.out.println("Startup mode: " + args[0]);
        }

        // Y1 Day 4.8: ATS-Y1-004 normalize spreadsheet-style survey intake values when supplied
        if (args.length > 1) {
            String rawEstimatedRecords = args[1];
            int estimatedRecords = SurveyProjectIntakeParser.parseEstimatedRecords(rawEstimatedRecords);
            double completionPercent = 87.9;
            int wholeCompletionPercent = SurveyProjectIntakeParser.toWholeCompletionPercent(completionPercent);
            String estimatedRecordsText = SurveyProjectIntakeParser.formatEstimatedRecords(estimatedRecords);

            System.out.println("Estimated records: " + estimatedRecordsText);
            System.out.println("Completion percentage: " + wholeCompletionPercent + "%");
            System.out.println("Parsed project count: " + SurveyProjectIntakeParser.getParsedProjectCount());

            // Y1 Day 5.7: ATS-Y1-005 turn normalized intake values into the first SurveyProject domain object
            SurveyProject project = new SurveyProject("ATS-SURVEY-001", estimatedRecords);
            Object intakeCandidate = project;
            SurveyProject acceptedProject = SurveyProjectReferenceService.requireSurveyProject(intakeCandidate);

            System.out.println("Project code: " + acceptedProject.getProjectCode());
            System.out.println("Records before shared-reference update: " + project.getEstimatedRecords());

            // Y1 Day 5.8: ATS-Y1-005 mutation through a copied object reference affects the same SurveyProject object
            SurveyProjectReferenceService.addEstimatedRecords(project, 500);
            System.out.println("Records after shared-reference update: " + project.getEstimatedRecords());

            SurveyProjectReferenceService.tryReplaceProject(project);
            System.out.println("Caller project after local replacement attempt: " + project.getProjectCode());
        }

        System.out.println(startupStatus);
    }
}
