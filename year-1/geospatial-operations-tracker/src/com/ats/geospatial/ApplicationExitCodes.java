package com.ats.geospatial;

public final class ApplicationExitCodes {

    // Y1 Day 6.2: ATS-Y1-006 document process-level outcomes for scheduled command execution
    public static final int SUCCESS = 0;
    public static final int MISSING_REQUIRED_ARGUMENT = 2;
    public static final int INVALID_RECORD_COUNT = 3;

    private ApplicationExitCodes() {
        // Exit codes are constants and should not require an object instance.
    }
}
