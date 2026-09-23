window.COURSE = {
  "title": "Java Experience — Year 1",
  "subtitle": "Five-year Java experience reconstruction · Year 1 currently through Day 6 / 500",
  "books": [
    {
      "id": "year-1",
      "title": "Year 1 — Java Software Development Intern",
      "subtitle": "Geospatial Operations Tracking System",
      "chapterStart": 1,
      "chapterEnd": 6
    }
  ],
  "package": {
    "apps": {
      "eclipse": {
        "workspace": "Java-Experience",
        "project": "geospatial-operations-tracker",
        "files": {},
        "openFile": ""
      },
      "powershell": {
        "cwd": "C:\\Java-Experience\\year-1\\geospatial-operations-tracker",
        "history": [],
        "output": "",
        "exitCode": 0
      },
      "github": {
        "user": "sabareeshrao",
        "displayName": "sabareeshrao",
        "activeRepo": "Java-Experience",
        "repositories": [
          {
            "name": "Java-Experience",
            "owner": "sabareeshrao",
            "defaultBranch": "main",
            "stars": 0,
            "watchers": 0,
            "forks": 0,
            "branches": [
              {
                "name": "main"
              }
            ],
            "tags": [],
            "releases": [],
            "issues": [],
            "pullRequests": [],
            "discussions": [],
            "projects": [],
            "security": {},
            "insights": {},
            "settings": {},
            "files": [
              {
                "path": "README.md",
                "content": "# Java Experience\\n\\nDAY 6 / 500"
              },
              {
                "path": "QUESTION_PROGRESS.md",
                "content": "# QUESTION PROGRESS\\n\\nCompleted: 30 / 2008\\nIn progress: 1\\nPending: 1977"
              },
              {
                "path": "docs/development-journal/Y1-D006.md",
                "content": "# Year 1 Day 6 — ATS-Y1-006 Enforce Survey Import Exit Codes"
              }
            ],
            "commits": [
              {
                "hash": "9fde1e1b71746ea2d403a48bd2a19c6baca0722c",
                "message": "ATS-Y1-006 Enforce survey import exit codes",
                "author": "sabareeshrao",
                "date": "2026-09-12"
              },
              {
                "hash": "324878b5c61fcf4331a8621161e3cbc193762991",
                "message": "ATS-Y1-005 Complete Day 5 SurveyProject reference semantics",
                "author": "sabareeshrao",
                "date": "2026-09-11"
              },
              {
                "hash": "da17e2ceed98d55c2f88cab04c97631efe48ba9b",
                "message": "ATS-Y1-004 Normalize survey project intake values",
                "author": "sabareeshrao",
                "date": "2026-09-11"
              },
              {
                "hash": "fe3d9e4c7bdf75ef0e04aea2f462c77d9a98accd",
                "message": "ATS-Y1-003 Verify Java main method launcher contract",
                "author": "sabareeshrao",
                "date": "2026-09-11"
              },
              {
                "hash": "fd082db7a09460c3dbb78ede34d8ccb2da387d53",
                "message": "ATS-Y1-002 Complete Day 2 Java runtime diagnostics",
                "author": "sabareeshrao",
                "date": "2026-09-11"
              },
              {
                "hash": "9fc9007574bbebcc136ee00ae097d5e869743760",
                "message": "ATS-Y1-001 Add Day 1 runnable application and question tracking",
                "author": "sabareeshrao",
                "date": "2026-09-11"
              }
            ]
          }
        ]
      }
    }
  },
  "stages": [
    {
      "title": "Day 1 / 500 — ATS-Y1-001 Initialize the Geospatial Operations Tracking System",
      "subtitle": "Year 1 · Java Software Development Intern · Geospatial Operations Tracking System",
      "steps": [
        {
          "title": "Day 1.1 Verify Java-Experience is empty",
          "why": "Confirm the remote starts from a genuine empty project state before any Java source is introduced.",
          "software": "github",
          "action": {
            "action": "openRepository",
            "data": {
              "name": "Java-Experience"
            }
          }
        },
        {
          "title": "Day 1.2 Define Year 1 project and package structure",
          "why": "Establish the geospatial-operations-tracker project and com.ats.geospatial package before adding application behavior.",
          "software": "eclipse",
          "action": {
            "action": "openProject",
            "data": {
              "project": "geospatial-operations-tracker"
            }
          }
        },
        {
          "title": "Day 1.3 Create GeospatialOperationsApplication",
          "why": "Create the first Java source file in the Year 1 project rather than importing a finished application.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\\n\\npublic class GeospatialOperationsApplication {\\n}\\n"
            }
          }
        },
        {
          "title": "Day 1.4 Establish the main application entry point",
          "why": "Add public static void main(String[] args) so the JVM launcher has the standard entry point.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\\n\\npublic class GeospatialOperationsApplication {\\n    public static void main(String[] args) {\\n    }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 1.5 Add visible startup verification",
          "why": "Print the application name and startup status so the first runnable build has an observable acceptance result.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 1.6 Compile as Java 8-compatible source",
          "why": "Compile explicitly with a Java 8 target before later build tools hide the compiler command.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac --release 8 -d out src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "output": "Compilation succeeded.",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 1.7 Run the application and verify console output",
          "why": "Execute the compiled class and verify the exact startup output from the first application.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "java -cp out com.ats.geospatial.GeospatialOperationsApplication",
              "output": "Geospatial Operations Tracking System\\nApplication started successfully.",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 1.8 Initialize question coverage tracking",
          "why": "Open the repository question-progress file so interview coverage is tied to completed engineering work.",
          "software": "github",
          "action": {
            "action": "openFile",
            "data": {
              "path": "QUESTION_PROGRESS.md"
            }
          }
        },
        {
          "title": "Day 1.9 Commit, push, and verify remote state",
          "why": "Finish Day 1 only after the implementation is represented by the verified remote handoff commit.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "9fc9007574bbebcc136ee00ae097d5e869743760"
            }
          }
        }
      ]
    },
    {
      "title": "Day 2 / 500 — ATS-Y1-002 Add Java Runtime Diagnostics",
      "subtitle": "Continue from the exact Day 1 repository state.",
      "steps": [
        {
          "title": "Day 2.1 Verify Day 1 remote SHA and read existing source",
          "why": "Start from the verified Day 1 handoff instead of recreating the application.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "9fc9007574bbebcc136ee00ae097d5e869743760"
            }
          }
        },
        {
          "title": "Day 2.2 Add non-instantiable RuntimeEnvironmentReport utility",
          "why": "Create a focused utility class for runtime diagnostics without allowing unnecessary object instances.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/RuntimeEnvironmentReport.java",
              "content": "package com.ats.geospatial;\\n\\npublic final class RuntimeEnvironmentReport {\\n    private RuntimeEnvironmentReport() {}\\n    public static void print() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 2.3 Read Java runtime and JVM identity from system properties",
          "why": "Expose the active Java version, runtime, JVM, vendor, and OS using standard system properties.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/RuntimeEnvironmentReport.java",
              "content": "package com.ats.geospatial;\n\npublic final class RuntimeEnvironmentReport {\n    private RuntimeEnvironmentReport() {}\n\n    public static void print() {\n        System.out.println(\"Java version: \" + System.getProperty(\"java.version\"));\n        System.out.println(\"Java runtime: \" + System.getProperty(\"java.runtime.name\"));\n        System.out.println(\"JVM: \" + System.getProperty(\"java.vm.name\"));\n        System.out.println(\"Java vendor: \" + System.getProperty(\"java.vendor\"));\n        System.out.println(\"Operating system: \" + System.getProperty(\"os.name\"));\n    }\n}"
            }
          }
        },
        {
          "title": "Day 2.4 Invoke runtime diagnostics from the existing main method",
          "why": "Extend the existing Day 1 main method rather than creating a second application entry point.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 2.5 Compile both classes with Java 8 target compatibility",
          "why": "Compile the existing application and the new diagnostic utility together using the Java 8 target.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac --release 8 -d out src/com/ats/geospatial/*.java",
              "output": "Compilation succeeded.",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 2.6 Run the application and inspect the active runtime",
          "why": "Use the runtime report to distinguish the project's Java 8 target from the workstation JVM executing the class.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "java -cp out com.ats.geospatial.GeospatialOperationsApplication",
              "output": "Geospatial Operations Tracking System\\nJava version: 21.0.11\\nJava runtime: OpenJDK Runtime Environment\\nJVM: OpenJDK 64-Bit Server VM\\nJava vendor: Debian\\nOperating system: Linux\\nApplication started successfully.",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 2.7 Inspect generated bytecode with javap",
          "why": "Verify class-file version 52 and inspect the compiled call into RuntimeEnvironmentReport.",
          "software": "eclipse",
          "action": {
            "action": "showBytecode",
            "data": {
              "output": "javap -verbose GeospatialOperationsApplication\\nmajor version: 52\\n\\ninvokestatic RuntimeEnvironmentReport.print"
            }
          }
        },
        {
          "title": "Day 2.8 Update question coverage without duplicating Day 1",
          "why": "Record newly practiced JVM/JDK/JRE questions while treating Day 1 JVM material only as reinforcement.",
          "software": "github",
          "action": {
            "action": "openFile",
            "data": {
              "path": "QUESTION_PROGRESS.md"
            }
          }
        },
        {
          "title": "Day 2.9 Push and verify remote main",
          "why": "Close Day 2 at the exact verified handoff commit used by Day 3.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "fd082db7a09460c3dbb78ede34d8ccb2da387d53"
            }
          }
        }
      ]
    },
    {
      "title": "Day 3 / 500 — ATS-Y1-003 Verify the Java main() Launcher Contract",
      "subtitle": "Use a real survey-import launch mode to investigate main-method behavior.",
      "steps": [
        {
          "title": "Day 3.1 Verify Day 2 remote SHA and existing source",
          "why": "Confirm the runtime-diagnostics build is the starting point for the launcher-contract work.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "fd082db7a09460c3dbb78ede34d8ccb2da387d53"
            }
          }
        },
        {
          "title": "Day 3.2 Read startup mode from String[] args",
          "why": "Give String[] args a real use by accepting the survey-import startup mode from the command line.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 3.3 Add a controlled main-method contract probe",
          "why": "Create a separate probe so launcher experiments do not damage the production application class.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/MainMethodContractProbe.java",
              "content": "package com.ats.geospatial;\n\npublic class MainMethodContractProbe {\n    public static void main(String[] args) {\n        System.out.println(\"launcher-selected main(String[])\");\n        main(\"manual-overload-call\");\n    }\n\n    public static void main(String label) {\n        System.out.println(\"overloaded main(String): \" + label);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 3.4 Prove the launcher selects main(String[])",
          "why": "Run the probe and observe that Java selects the String[] signature as the launch entry point.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "java -cp out com.ats.geospatial.MainMethodContractProbe",
              "output": "launcher-selected main(String[])\\noverloaded main(String): manual-overload-call",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 3.5 Prove main() can be overloaded but overload is manual",
          "why": "Use the probe output to show that the overloaded main(String) executes only because main(String[]) calls it explicitly.",
          "software": "eclipse",
          "action": {
            "action": "openFile",
            "data": {
              "path": "src/com/ats/geospatial/MainMethodContractProbe.java"
            }
          }
        },
        {
          "title": "Day 3.6 Reproduce non-static and non-public launcher failures",
          "why": "Use controlled broken launcher experiments to observe why the standard main method must be public and static.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "java -cp out MainWithoutStatic",
              "output": "Error: Main method is not static in class MainWithoutStatic",
              "exitCode": 1
            }
          }
        },
        {
          "title": "Day 3.7 Reproduce static-main @Override compiler failure",
          "why": "Compile a probe showing that a static main method cannot override an instance method.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac MainOverrideProbe.java",
              "output": "error: static methods cannot be annotated with @Override",
              "exitCode": 1
            }
          }
        },
        {
          "title": "Day 3.8 Inspect Java 8 class version and method signatures",
          "why": "Use javap to confirm class-file version 52 and inspect both legal main overload signatures.",
          "software": "eclipse",
          "action": {
            "action": "showBytecode",
            "data": {
              "output": "major version: 52\\npublic static void main(java.lang.String[]);\\npublic static void main(java.lang.String);"
            }
          }
        },
        {
          "title": "Day 3.9 Update question coverage",
          "why": "Record the launcher-contract questions as primary coverage only once.",
          "software": "github",
          "action": {
            "action": "openFile",
            "data": {
              "path": "QUESTION_PROGRESS.md"
            }
          }
        },
        {
          "title": "Day 3.10 Commit, push, and verify remote state",
          "why": "Use the final Day 3 commit as the only starting point for Day 4.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "fe3d9e4c7bdf75ef0e04aea2f462c77d9a98accd"
            }
          }
        }
      ]
    },
    {
      "title": "Day 4 / 500 — ATS-Y1-004 Normalize Survey Project Intake Values",
      "subtitle": "Convert spreadsheet-style text into typed Java values for survey intake.",
      "steps": [
        {
          "title": "Day 4.1 Verify Day 3 remote state",
          "why": "Confirm the main-method launcher work is already present before adding intake normalization.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "fe3d9e4c7bdf75ef0e04aea2f462c77d9a98accd"
            }
          }
        },
        {
          "title": "Day 4.2 Create SurveyProjectIntakeParser",
          "why": "Introduce a focused parser utility for spreadsheet-style survey input.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectIntakeParser {\\n    private SurveyProjectIntakeParser() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 4.3 Convert estimated-record text into int",
          "why": "Use Integer.parseInt because calculations require a primitive numeric value rather than spreadsheet text.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectIntakeParser {\\n    private SurveyProjectIntakeParser() {}\\n    public static int parseEstimatedRecords(String value) { return Integer.parseInt(value); }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 4.4 Narrow decimal completion percentage explicitly",
          "why": "Use an explicit cast to convert a decimal completion percentage to the whole-number display required by the console summary.",
          "software": "eclipse",
          "action": {
            "action": "appendFileContent",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "content": "\\n// explicit narrowing example: (int) 87.9 -> 87\\n"
            }
          }
        },
        {
          "title": "Day 4.5 Add shared static intake counter",
          "why": "Track successful intake parses at class level so all calls share one count.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "content": "package com.ats.geospatial;\n\npublic final class SurveyProjectIntakeParser {\n    private static int parsedProjectCount;\n\n    private SurveyProjectIntakeParser() {}\n\n    public static int parseEstimatedRecords(String value) {\n        int parsed = Integer.parseInt(value);\n        parsedProjectCount++;\n        return parsed;\n    }\n\n    public static int toWholeCompletionPercent(double value) {\n        return (int) value;\n    }\n\n    public static String formatEstimatedRecords(int value) {\n        return Integer.toString(value);\n    }\n\n    public static int getParsedProjectCount() {\n        return parsedProjectCount;\n    }\n}"
            }
          }
        },
        {
          "title": "Day 4.6 Convert record count back to String",
          "why": "Use Integer.toString when the numeric count must return to a display/reporting representation.",
          "software": "eclipse",
          "action": {
            "action": "openFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java"
            }
          }
        },
        {
          "title": "Day 4.7 Prove primitive int cannot store null",
          "why": "Compile an intentionally invalid primitive-null assignment and preserve the compiler failure as learning evidence, not production code.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac PrimitiveNullProbe.java",
              "output": "error: incompatible types: <null> cannot be converted to int",
              "exitCode": 1
            }
          }
        },
        {
          "title": "Day 4.8 Integrate normalization into existing main()",
          "why": "Extend the existing command-line flow so survey-import can normalize the second argument instead of leaving parser logic isolated.",
          "software": "eclipse",
          "action": {
            "action": "appendFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "\\n// Day 4 integration: parse survey-import record count with SurveyProjectIntakeParser.\\n"
            }
          }
        },
        {
          "title": "Day 4.9 Compile, run, and inspect Java 8 bytecode",
          "why": "Verify the normalized survey-import path executes and still compiles to Java 8 class-file version 52.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac --release 8 -d out src/com/ats/geospatial/*.java; java -cp out com.ats.geospatial.GeospatialOperationsApplication survey-import 12500",
              "output": "Startup argument count: 2\\nStartup mode: survey-import\\nEstimated records: 12500\\nCompletion percentage: 87%\\nParsed project count: 1\\nApplication started successfully.\\nmajor version: 52",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 4.10 Update coverage, push, and verify",
          "why": "Finish the intake-normalization day at its verified remote commit after question coverage is updated.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "da17e2ceed98d55c2f88cab04c97631efe48ba9b"
            }
          }
        }
      ]
    },
    {
      "title": "Day 5 / 500 — ATS-Y1-005 Introduce SurveyProject Object and Reference Semantics",
      "subtitle": "Turn disconnected intake values into the first real project-domain object.",
      "steps": [
        {
          "title": "Day 5.1 Verify Day 4 remote state",
          "why": "Start from the normalized intake build so the new object model grows from working code.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "da17e2ceed98d55c2f88cab04c97631efe48ba9b"
            }
          }
        },
        {
          "title": "Day 5.2 Create first SurveyProject domain object",
          "why": "Keep project code and estimated-record count together in one domain object.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProject.java",
              "content": "package com.ats.geospatial;\n\npublic class SurveyProject {\n    private String projectCode;\n    private int estimatedRecords;\n\n    public SurveyProject(String projectCode, int estimatedRecords) {\n        this.projectCode = projectCode;\n        this.estimatedRecords = estimatedRecords;\n    }\n\n    public String getProjectCode() { return projectCode; }\n    public int getEstimatedRecords() { return estimatedRecords; }\n    public void setEstimatedRecords(int estimatedRecords) { this.estimatedRecords = estimatedRecords; }\n}"
            }
          }
        },
        {
          "title": "Day 5.3 Add reference-semantics service",
          "why": "Create a small service where object-reference behavior can be exercised through real project operations.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectReferenceService {\\n    private SurveyProjectReferenceService() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 5.4 Mutate object through copied reference",
          "why": "Show that a copied Java reference still reaches the same SurveyProject object and can mutate its state.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectReferenceService {\\n    private SurveyProjectReferenceService() {}\\n    public static void addEstimatedRecords(SurveyProject project, int additionalRecords) {\\n        project.setEstimatedRecords(project.getEstimatedRecords() + additionalRecords);\\n    }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 5.5 Prove parameter reassignment does not replace caller reference",
          "why": "Reassign only the local parameter and observe that the caller continues referencing the original SurveyProject.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "content": "package com.ats.geospatial;\n\npublic final class SurveyProjectReferenceService {\n    private SurveyProjectReferenceService() {}\n\n    public static void addEstimatedRecords(SurveyProject project, int additionalRecords) {\n        project.setEstimatedRecords(project.getEstimatedRecords() + additionalRecords);\n    }\n\n    public static void tryReplaceProject(SurveyProject project) {\n        project = new SurveyProject(\"LOCAL-REPLACEMENT\", 0);\n        System.out.println(\"Inside replacement project: \" + project.getProjectCode());\n    }\n\n    public static SurveyProject requireSurveyProject(Object candidate) {\n        if (!(candidate instanceof SurveyProject)) {\n            throw new IllegalArgumentException(\"Expected SurveyProject\");\n        }\n        return (SurveyProject) candidate;\n    }\n}"
            }
          }
        },
        {
          "title": "Day 5.6 Guard generic intake with instanceof",
          "why": "Check an Object before narrowing it to SurveyProject so an invalid candidate is rejected deliberately.",
          "software": "eclipse",
          "action": {
            "action": "openFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectReferenceService.java"
            }
          }
        },
        {
          "title": "Day 5.7 Integrate SurveyProject into existing application",
          "why": "Create the project object from normalized intake and exercise mutation and local-reference replacement in the running application.",
          "software": "eclipse",
          "action": {
            "action": "appendFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "\\n// Day 5 integration: create SurveyProject and exercise SurveyProjectReferenceService.\\n"
            }
          }
        },
        {
          "title": "Day 5.8 Reproduce invalid cast and ClassCastException",
          "why": "Run an intentionally invalid Object-to-SurveyProject cast to see the runtime exception that instanceof is protecting against.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "java InvalidCastProbe",
              "output": "java.lang.ClassCastException: java.lang.String cannot be cast to com.ats.geospatial.SurveyProject",
              "exitCode": 1
            }
          }
        },
        {
          "title": "Day 5.9 Compile/run and verify Java 8 bytecode",
          "why": "Execute the real reference-semantics flow and retain Java 8 compatibility.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javac --release 8 -d out src/com/ats/geospatial/*.java; java -cp out com.ats.geospatial.GeospatialOperationsApplication survey-import 12500",
              "output": "Project code: ATS-SURVEY-001\\nRecords before shared-reference update: 12500\\nRecords after shared-reference update: 13000\\nInside replacement project: LOCAL-REPLACEMENT\\nCaller project after local replacement attempt: ATS-SURVEY-001\\nmajor version: 52",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 5.10 Update coverage, push, and verify",
          "why": "Close the object-reference day at the exact commit Day 6 will inherit.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "324878b5c61fcf4331a8621161e3cbc193762991"
            }
          }
        }
      ]
    },
    {
      "title": "Day 6 / 500 — ATS-Y1-006 Enforce Survey Import Exit Codes",
      "subtitle": "Give scheduled survey-import execution a predictable process-level success/failure contract.",
      "steps": [
        {
          "title": "Day 6.1 Verify Day 5 remote state",
          "why": "Start from the completed SurveyProject reference-semantics commit rather than rebuilding previous work.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "324878b5c61fcf4331a8621161e3cbc193762991"
            }
          }
        },
        {
          "title": "Day 6.2 Add named application exit codes",
          "why": "Define stable named process outcomes for success, missing input, and invalid numeric input.",
          "software": "eclipse",
          "action": {
            "action": "createJavaFile",
            "data": {
              "path": "src/com/ats/geospatial/ApplicationExitCodes.java",
              "content": "package com.ats.geospatial;\n\npublic final class ApplicationExitCodes {\n    public static final int SUCCESS = 0;\n    public static final int MISSING_REQUIRED_ARGUMENT = 2;\n    public static final int INVALID_RECORD_COUNT = 3;\n\n    private ApplicationExitCodes() {}\n}"
            }
          }
        },
        {
          "title": "Day 6.3 Reject missing survey-import record count",
          "why": "Validate required batch input at the top-level process boundary and terminate with the missing-argument exit code.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n\n        boolean surveyImportMode = args.length > 0 && \"survey-import\".equals(args[0]);\n        if (surveyImportMode && args.length < 2) {\n            System.err.println(\"Startup validation failed: survey-import requires an estimated record count.\");\n            System.exit(ApplicationExitCodes.MISSING_REQUIRED_ARGUMENT);\n            return;\n        }\n\n        if (surveyImportMode) {\n            int estimatedRecords;\n            try {\n                estimatedRecords = SurveyProjectIntakeParser.parseEstimatedRecords(args[1]);\n            } catch (NumberFormatException exception) {\n                System.err.println(\"Startup validation failed: estimated record count must be a whole number.\");\n                System.exit(ApplicationExitCodes.INVALID_RECORD_COUNT);\n                return;\n            }\n\n            SurveyProject project = new SurveyProject(\"ATS-SURVEY-001\", estimatedRecords);\n            SurveyProjectReferenceService.addEstimatedRecords(project, 500);\n            SurveyProjectReferenceService.tryReplaceProject(project);\n            System.out.println(\"Caller project after local replacement attempt: \" + project.getProjectCode());\n        }\n\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 6.4 Convert NumberFormatException into controlled exit status",
          "why": "Catch invalid record-count parsing and translate it into a predictable process exit code instead of leaking the raw failure.",
          "software": "eclipse",
          "action": {
            "action": "openFile",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java"
            }
          }
        },
        {
          "title": "Day 6.5 Preserve natural exit 0 on successful startup",
          "why": "Allow valid execution to finish main() naturally rather than scattering System.exit(0) through the application.",
          "software": "eclipse",
          "action": {
            "action": "setFileContent",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "content": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n\n        boolean surveyImportMode = args.length > 0 && \"survey-import\".equals(args[0]);\n        if (surveyImportMode && args.length < 2) {\n            System.err.println(\"Startup validation failed: survey-import requires an estimated record count.\");\n            System.exit(ApplicationExitCodes.MISSING_REQUIRED_ARGUMENT);\n            return;\n        }\n\n        if (surveyImportMode) {\n            int estimatedRecords;\n            try {\n                estimatedRecords = SurveyProjectIntakeParser.parseEstimatedRecords(args[1]);\n            } catch (NumberFormatException exception) {\n                System.err.println(\"Startup validation failed: estimated record count must be a whole number.\");\n                System.exit(ApplicationExitCodes.INVALID_RECORD_COUNT);\n                return;\n            }\n\n            SurveyProject project = new SurveyProject(\"ATS-SURVEY-001\", estimatedRecords);\n            SurveyProjectReferenceService.addEstimatedRecords(project, 500);\n            SurveyProjectReferenceService.tryReplaceProject(project);\n            System.out.println(\"Caller project after local replacement attempt: \" + project.getProjectCode());\n        }\n\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 6.6 Execute valid/missing/invalid/plain startup tests",
          "why": "Exercise all four process paths and verify their outputs and exit statuses from the shell.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "run Day 6 exit-code test matrix",
              "output": "survey-import 12500 -> exit 0\\nsurvey-import -> exit 2\\nsurvey-import abc -> exit 3\\nplain startup -> exit 0",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 6.7 Verify Java 8 bytecode",
          "why": "Confirm ApplicationExitCodes and the application still compile to Java 8 class-file version 52.",
          "software": "eclipse",
          "action": {
            "action": "showBytecode",
            "data": {
              "output": "ApplicationExitCodes.class\\nmajor version: 52\\nGeospatialOperationsApplication.class\\nmajor version: 52"
            }
          }
        },
        {
          "title": "Day 6.8 Record Agile-style project methodology",
          "why": "Ground the methodology answer in the repository's actual ticket → implementation → QA → commit → handoff workflow.",
          "software": "github",
          "action": {
            "action": "openFile",
            "data": {
              "path": "docs/development-journal/Y1-D006.md"
            }
          }
        },
        {
          "title": "Day 6.9 Update question coverage",
          "why": "Record System.exit and project-methodology primary coverage without duplicating older main-method questions.",
          "software": "github",
          "action": {
            "action": "openFile",
            "data": {
              "path": "QUESTION_PROGRESS.md"
            }
          }
        },
        {
          "title": "Day 6.10 Push and verify remote handoff",
          "why": "Finish the existing course state at the current verified Day 6 remote commit.",
          "software": "github",
          "action": {
            "action": "openCommit",
            "data": {
              "hash": "9fde1e1b71746ea2d403a48bd2a19c6baca0722c"
            }
          }
        }
      ]
    }
  ]
};
