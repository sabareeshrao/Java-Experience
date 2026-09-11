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

        System.out.println(startupStatus);
    }
}
