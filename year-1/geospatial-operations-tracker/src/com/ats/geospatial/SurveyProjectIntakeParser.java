package com.ats.geospatial;

public final class SurveyProjectIntakeParser {

    // Y1 Day 4.5: ATS-Y1-004 one class-level counter is shared by every intake parse operation
    private static int parsedProjectCount = 0;

    private SurveyProjectIntakeParser() {
        // Y1 Day 4.2: ATS-Y1-004 intake normalization is exposed through static utility methods
    }

    // Y1 Day 4.3: ATS-Y1-004 convert spreadsheet-style text into a primitive record count
    public static int parseEstimatedRecords(String rawEstimatedRecords) {
        int estimatedRecords = Integer.parseInt(rawEstimatedRecords);
        parsedProjectCount++;
        return estimatedRecords;
    }

    // Y1 Day 4.4: ATS-Y1-004 explicitly narrow a decimal percentage to a whole-number display value
    public static int toWholeCompletionPercent(double completionPercent) {
        return (int) completionPercent;
    }

    // Y1 Day 4.6: ATS-Y1-004 convert a primitive count back to text for console/report output
    public static String formatEstimatedRecords(int estimatedRecords) {
        return Integer.toString(estimatedRecords);
    }

    public static int getParsedProjectCount() {
        return parsedProjectCount;
    }
}
