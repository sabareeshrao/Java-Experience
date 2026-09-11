package com.ats.geospatial;

public final class MainMethodContractProbe {

    private MainMethodContractProbe() {
        // Y1 Day 3.3: ATS-Y1-003 probe is a launcher experiment, not a domain object
    }

    // Y1 Day 3.4: ATS-Y1-003 this is the JVM-recognized launcher entry point
    public static void main(String[] args) {
        System.out.println("JVM selected: main(String[] args)");

        // Y1 Day 3.5: ATS-Y1-003 an overloaded main behaves like a normal static method when called explicitly
        main("manual-overload-call");
    }

    // Y1 Day 3.5: ATS-Y1-003 overload is legal, but the JVM launcher does not select this signature
    public static void main(String label) {
        System.out.println("Overloaded main invoked manually: " + label);
    }
}
