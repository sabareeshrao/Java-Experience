package com.ats.geospatial;

public final class RuntimeEnvironmentReport {

    private RuntimeEnvironmentReport() {
        // Y1 Day 2.2: ATS-Y1-002 utility class should not be instantiated
    }

    // Y1 Day 2.3: ATS-Y1-002 read runtime and JVM identity from standard system properties
    public static void print() {
        System.out.println("Java version: " + System.getProperty("java.version"));
        System.out.println("Java runtime: " + System.getProperty("java.runtime.name"));
        System.out.println("JVM: " + System.getProperty("java.vm.name"));
        System.out.println("Java vendor: " + System.getProperty("java.vendor"));
        System.out.println("Operating system: " + System.getProperty("os.name"));
    }
}
