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
      },
      "intellij_idea": {
        "project": {
          "name": "geospatial-operations-tracker",
          "sdk": "Java 8",
          "languageLevel": "8"
        },
        "tree": [],
        "files": {},
        "problems": [],
        "breakpoints": [],
        "runConfigurations": [],
        "maven": {},
        "spring": {},
        "jpa": {},
        "git": {
          "branch": "main",
          "changes": [],
          "history": []
        },
        "database": {},
        "tests": {},
        "terminal": "",
        "console": "",
        "visibleFeatures": []
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
          "why": "Before coding, verify the Java-Experience repository and confirm the expected starting state. The purpose is to prove that this experience is being built from the real remote repository instead of importing a finished application. Only after the starting point is confirmed should the first project work begin.",
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
          "why": "Establish the Year 1 project structure that will hold the Geospatial Operations Tracking System. Keep the structure deliberately small because Maven, databases, Spring, and other enterprise tools have not become necessary yet. This gives every later addition a visible reason to exist.",
          "software": "intellij",
          "action": {
            "action": "openProject",
            "data": {
              "project": {
                "name": "geospatial-operations-tracker",
                "sdk": "Java 8",
                "languageLevel": "8"
              }
            }
          }
        },
        {
          "title": "Day 1.3 Create GeospatialOperationsApplication",
          "why": "Create the first Java application class inside the project. This is the first real source file of the experience, so the goal is simply to establish a genuine Java application rather than jump ahead to frameworks or generated project templates.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "language": "java",
              "content": "package com.ats.geospatial;\\n\\npublic class GeospatialOperationsApplication {\\n}\\n"
            }
          }
        },
        {
          "title": "Day 1.4 Establish the main application entry point",
          "why": "Give the application a valid starting point that the Java launcher can execute. At this stage we are only establishing where execution begins; the deeper interview questions about launcher behavior will be tested on a later day when the project creates that need.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\\n\\npublic class GeospatialOperationsApplication {\\n    public static void main(String[] args) {\\n    }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 1.5 Add visible startup verification",
          "why": "Make application startup visible to the developer and QA. The program should identify the Geospatial Operations Tracking System and clearly confirm that startup completed, giving Day 1 a simple observable acceptance result.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 1.6 Compile as Java 8-compatible source",
          "why": "Compile the source with Java 8 compatibility so the early-career project has an explicit technical target. This confirms that nothing introduced on Day 1 depends on newer Java syntax and keeps the project consistent with the intended Year 1 environment.",
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
          "why": "Run the compiled application and verify that the startup messages actually appear. This proves Day 1 is working software, not documentation-only progress, and gives QA a concrete result to accept before moving forward.",
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
          "why": "Initialize interview-question tracking only after real project work has occurred. Questions completed today should be tied to what was genuinely practiced, while broader tool-experience questions remain in progress until the project naturally introduces more technologies.",
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
          "why": "Finish the day by verifying the implementation on GitHub. The remote commit becomes the handoff point for Day 2, so future work must continue from this exact state instead of recreating the project.",
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
          "why": "Start Day 2 by verifying the exact Day 1 handoff and reading the existing application before making changes. The rule for the entire 500-day experience is to extend yesterday's working repository with today's requirement, not rebuild the same files again.",
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
          "why": "Create a small runtime-reporting utility because another developer may see different Java versions between the IDE and terminal. The utility belongs in the existing project and should have one focused responsibility: expose the environment in which the application is actually running.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/RuntimeEnvironmentReport.java",
              "language": "java",
              "content": "package com.ats.geospatial;\\n\\npublic final class RuntimeEnvironmentReport {\\n    private RuntimeEnvironmentReport() {}\\n    public static void print() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 2.3 Read Java runtime and JVM identity from system properties",
          "why": "Read the active Java version, runtime, virtual machine, vendor, and operating system from the running process. This turns JDK, runtime, and JVM terminology into something observable during troubleshooting instead of something memorized only for interviews.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/RuntimeEnvironmentReport.java",
              "code": "package com.ats.geospatial;\n\npublic final class RuntimeEnvironmentReport {\n    private RuntimeEnvironmentReport() {}\n\n    public static void print() {\n        System.out.println(\"Java version: \" + System.getProperty(\"java.version\"));\n        System.out.println(\"Java runtime: \" + System.getProperty(\"java.runtime.name\"));\n        System.out.println(\"JVM: \" + System.getProperty(\"java.vm.name\"));\n        System.out.println(\"Java vendor: \" + System.getProperty(\"java.vendor\"));\n        System.out.println(\"Operating system: \" + System.getProperty(\"os.name\"));\n    }\n}"
            }
          }
        },
        {
          "title": "Day 2.4 Invoke runtime diagnostics from the existing main method",
          "why": "Integrate the runtime report into the existing application startup flow. Day 1 behavior stays in place; Day 2 adds only the diagnostic capability required for workstation and environment troubleshooting.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 2.5 Compile both classes with Java 8 target compatibility",
          "why": "Compile the expanded application with the same Java 8 target used on Day 1. The goal is to prove that adding runtime diagnostics has not changed the project's compatibility contract.",
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
          "why": "Run the application and inspect the environment information it reports. This demonstrates that the Java version used to execute the program can differ from the class-file target, which is a realistic source of confusion on developer machines.",
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
          "why": "Inspect the compiled class information and confirm the Java 8 class-file version. Also verify that the application really contains the call to the runtime-reporting utility, connecting the source change to the generated bytecode.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javap -classpath out -verbose com.ats.geospatial.GeospatialOperationsApplication",
              "output": "javap -verbose GeospatialOperationsApplication\\nmajor version: 52\\n\\ninvokestatic RuntimeEnvironmentReport.print",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 2.8 Update question coverage without duplicating Day 1",
          "why": "Update question coverage based on what Day 2 actually exercised. New JDK, runtime, and JVM questions can receive primary coverage, while concepts already completed on Day 1 should be recorded only as reinforcement.",
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
          "why": "Push and verify the completed Day 2 state on GitHub. This verified remote commit is the only valid starting point for Day 3 and preserves continuity across the experience.",
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
          "why": "Verify the Day 2 commit and inspect the current source before touching the launcher behavior. The runtime diagnostics already exist and must remain intact; Day 3 should add only the new startup requirement.",
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
          "why": "Give the existing command-line argument array a real project responsibility by using it to receive a startup mode for survey import work. The goal is to connect the Java launcher contract to an operational requirement instead of treating arguments as disconnected syntax.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 3.3 Add a controlled main-method contract probe",
          "why": "Create a separate launcher-contract probe for controlled experiments. Keeping these experiments outside the main application lets us test unusual main-method signatures without damaging the real project flow.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/MainMethodContractProbe.java",
              "language": "java",
              "content": "package com.ats.geospatial;\n\npublic class MainMethodContractProbe {\n    public static void main(String[] args) {\n        System.out.println(\"launcher-selected main(String[])\");\n        main(\"manual-overload-call\");\n    }\n\n    public static void main(String label) {\n        System.out.println(\"overloaded main(String): \" + label);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 3.4 Prove the launcher selects main(String[])",
          "why": "Run the launcher probe and observe which main method Java selects automatically. This provides direct evidence of the launcher contract and separates what Java starts automatically from what application code calls manually.",
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
          "why": "Inspect the overloaded main methods and confirm that overloading is legal Java. The important distinction is that an overload may exist in the class, but the Java launcher does not choose an arbitrary overload as the application entry point.",
          "software": "intellij",
          "action": {
            "action": "openFile",
            "data": {
              "file": "src/com/ats/geospatial/MainMethodContractProbe.java"
            }
          }
        },
        {
          "title": "Day 3.6 Reproduce non-static and non-public launcher failures",
          "why": "Reproduce invalid launcher signatures in controlled experiments. Seeing the application fail when required launcher characteristics are removed gives a stronger understanding than simply memorizing that the main method must be public and static.",
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
          "why": "Attempt the static-main override experiment and observe the compiler rejection. This establishes that the main method is static and therefore participates in method hiding rather than normal polymorphic overriding.",
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
          "why": "Inspect the compiled method signatures and Java 8 class-file version. This ties the launcher experiments back to the actual compiled class and confirms that the Year 1 compatibility target is still preserved.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javap -classpath out -verbose com.ats.geospatial.MainMethodContractProbe",
              "output": "major version: 52\\npublic static void main(java.lang.String[]);\\npublic static void main(java.lang.String);",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 3.9 Update question coverage",
          "why": "Update interview coverage for the main-method questions that were actually tested today. Previously completed JVM questions should be recorded as reinforcement rather than counted again.",
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
          "why": "Push one logical Day 3 change and verify the remote commit. Day 4 must begin from this verified state with the existing application, runtime report, and launcher probe already present.",
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
          "why": "Verify the completed Day 3 repository before introducing survey intake values. The launcher behavior and runtime diagnostics are already part of the application, so Day 4 should extend that working baseline rather than replace it.",
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
          "why": "Create a focused survey-intake parser because spreadsheet values arrive as text while calculations require typed Java values. Keep the responsibility narrow so conversion logic does not become scattered throughout the application.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "language": "java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectIntakeParser {\\n    private SurveyProjectIntakeParser() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 4.3 Convert estimated-record text into int",
          "why": "Convert the incoming estimated-record value from text into a numeric value that the application can calculate with. This is the first practical use of type conversion in the project and comes directly from the survey-import requirement.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "code": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectIntakeParser {\\n    private SurveyProjectIntakeParser() {}\\n    public static int parseEstimatedRecords(String value) { return Integer.parseInt(value); }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 4.4 Narrow decimal completion percentage explicitly",
          "why": "Convert a decimal completion percentage into the whole-number form required by the current console summary. This gives explicit narrowing a business reason instead of introducing casting through an isolated classroom example.",
          "software": "intellij",
          "action": {
            "action": "typeCode",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "position": "end",
              "code": "\\n// explicit narrowing example: (int) 87.9 -> 87\\n",
              "boundary": false
            }
          }
        },
        {
          "title": "Day 4.5 Add shared static intake counter",
          "why": "Add one shared count of successful survey-intake parses. The purpose is to practice class-level shared state in a small, observable place while keeping the parser's responsibility understandable.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectIntakeParser.java",
              "code": "package com.ats.geospatial;\n\npublic final class SurveyProjectIntakeParser {\n    private static int parsedProjectCount;\n\n    private SurveyProjectIntakeParser() {}\n\n    public static int parseEstimatedRecords(String value) {\n        int parsed = Integer.parseInt(value);\n        parsedProjectCount++;\n        return parsed;\n    }\n\n    public static int toWholeCompletionPercent(double value) {\n        return (int) value;\n    }\n\n    public static String formatEstimatedRecords(int value) {\n        return Integer.toString(value);\n    }\n\n    public static int getParsedProjectCount() {\n        return parsedProjectCount;\n    }\n}"
            }
          }
        },
        {
          "title": "Day 4.6 Convert record count back to String",
          "why": "Convert the numeric record count back into text when the application needs a display or reporting representation. This completes the round trip between external text, internal numeric processing, and output formatting.",
          "software": "intellij",
          "action": {
            "action": "openFile",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectIntakeParser.java"
            }
          }
        },
        {
          "title": "Day 4.7 Prove primitive int cannot store null",
          "why": "Run a controlled invalid experiment showing that a primitive integer cannot hold a null value. The failing experiment is learning evidence only and should not become part of the committed production source.",
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
          "why": "Integrate the normalization work into the existing survey-import startup flow. The parser now serves a real application path instead of remaining an isolated utility with no connection to the project.",
          "software": "intellij",
          "action": {
            "action": "typeCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "position": "end",
              "code": "\\n// Day 4 integration: parse survey-import record count with SurveyProjectIntakeParser.\\n",
              "boundary": false
            }
          }
        },
        {
          "title": "Day 4.9 Compile, run, and inspect Java 8 bytecode",
          "why": "Compile and execute the survey-import path, then verify that the project still produces Java 8-compatible bytecode. The acceptance check is that the new values are normalized and the earlier startup behavior continues to work.",
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
          "why": "Update question coverage and verify the Day 4 commit on GitHub. Only the questions genuinely exercised by this intake-normalization work should receive primary completion.",
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
          "why": "Verify the Day 4 remote state before introducing the first real domain object. The normalized survey values already exist, and Day 5 should build on them rather than restart the intake flow.",
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
          "why": "Create the SurveyProject domain object so the project code and estimated-record count belong to one meaningful business record. This is the point where disconnected variables begin turning into an actual application model.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProject.java",
              "language": "java",
              "content": "package com.ats.geospatial;\n\npublic class SurveyProject {\n    private String projectCode;\n    private int estimatedRecords;\n\n    public SurveyProject(String projectCode, int estimatedRecords) {\n        this.projectCode = projectCode;\n        this.estimatedRecords = estimatedRecords;\n    }\n\n    public String getProjectCode() { return projectCode; }\n    public int getEstimatedRecords() { return estimatedRecords; }\n    public void setEstimatedRecords(int estimatedRecords) { this.estimatedRecords = estimatedRecords; }\n}"
            }
          }
        },
        {
          "title": "Day 5.3 Add reference-semantics service",
          "why": "Add a small reference-semantics service so object-reference behavior can be exercised through project operations. The service exists to create realistic mutation and parameter-passing scenarios around SurveyProject.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "language": "java",
              "content": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectReferenceService {\\n    private SurveyProjectReferenceService() {}\\n}\\n"
            }
          }
        },
        {
          "title": "Day 5.4 Mutate object through copied reference",
          "why": "Pass the SurveyProject into a method and mutate the object through the copied reference. The important observation is that both references still reach the same object, so the caller can see the changed state.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "code": "package com.ats.geospatial;\\n\\npublic final class SurveyProjectReferenceService {\\n    private SurveyProjectReferenceService() {}\\n    public static void addEstimatedRecords(SurveyProject project, int additionalRecords) {\\n        project.setEstimatedRecords(project.getEstimatedRecords() + additionalRecords);\\n    }\\n}\\n"
            }
          }
        },
        {
          "title": "Day 5.5 Prove parameter reassignment does not replace caller reference",
          "why": "Reassign the method parameter to a different SurveyProject and compare it with the caller's reference afterward. This demonstrates that changing the local parameter reference does not replace the reference held by the caller.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectReferenceService.java",
              "code": "package com.ats.geospatial;\n\npublic final class SurveyProjectReferenceService {\n    private SurveyProjectReferenceService() {}\n\n    public static void addEstimatedRecords(SurveyProject project, int additionalRecords) {\n        project.setEstimatedRecords(project.getEstimatedRecords() + additionalRecords);\n    }\n\n    public static void tryReplaceProject(SurveyProject project) {\n        project = new SurveyProject(\"LOCAL-REPLACEMENT\", 0);\n        System.out.println(\"Inside replacement project: \" + project.getProjectCode());\n    }\n\n    public static SurveyProject requireSurveyProject(Object candidate) {\n        if (!(candidate instanceof SurveyProject)) {\n            throw new IllegalArgumentException(\"Expected SurveyProject\");\n        }\n        return (SurveyProject) candidate;\n    }\n}"
            }
          }
        },
        {
          "title": "Day 5.6 Guard generic intake with instanceof",
          "why": "Guard a generic object before narrowing it to SurveyProject. The check gives the application a deliberate way to reject the wrong type and connects type checking to a realistic intake boundary.",
          "software": "intellij",
          "action": {
            "action": "openFile",
            "data": {
              "file": "src/com/ats/geospatial/SurveyProjectReferenceService.java"
            }
          }
        },
        {
          "title": "Day 5.7 Integrate SurveyProject into existing application",
          "why": "Integrate SurveyProject into the existing survey-import path. The application should now build a domain object from the normalized values and use the reference service as part of the same evolving flow.",
          "software": "intellij",
          "action": {
            "action": "typeCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "position": "end",
              "code": "\\n// Day 5 integration: create SurveyProject and exercise SurveyProjectReferenceService.\\n",
              "boundary": false
            }
          }
        },
        {
          "title": "Day 5.8 Reproduce invalid cast and ClassCastException",
          "why": "Run a controlled invalid-cast experiment and observe the runtime failure. This provides concrete evidence for why the type check exists, while keeping the intentionally broken experiment out of committed production code.",
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
          "why": "Compile and run the complete Day 5 flow while preserving Java 8 compatibility. Verify both shared-object mutation and local parameter reassignment without regressing the earlier startup and intake behavior.",
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
          "why": "Update question coverage and verify the final Day 5 GitHub commit. The resulting remote state becomes the exact predecessor for the process-exit work on Day 6.",
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
          "why": "Verify the Day 5 remote commit and existing SurveyProject flow before adding process-level behavior. Day 6 must preserve all previous functionality and change only how scheduled survey imports report success or failure.",
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
          "why": "Create named application exit outcomes for successful execution, missing required input, and invalid record-count input. Named outcomes make the batch process contract understandable to developers, QA, schedulers, and future automation.",
          "software": "intellij",
          "action": {
            "action": "createFile",
            "data": {
              "path": "src/com/ats/geospatial/ApplicationExitCodes.java",
              "language": "java",
              "content": "package com.ats.geospatial;\n\npublic final class ApplicationExitCodes {\n    public static final int SUCCESS = 0;\n    public static final int MISSING_REQUIRED_ARGUMENT = 2;\n    public static final int INVALID_RECORD_COUNT = 3;\n\n    private ApplicationExitCodes() {}\n}"
            }
          }
        },
        {
          "title": "Day 6.3 Reject missing survey-import record count",
          "why": "Validate that survey-import receives the record count it requires. When the input is missing, the application should fail deliberately at the top-level process boundary instead of printing a misleading success message.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n\n        boolean surveyImportMode = args.length > 0 && \"survey-import\".equals(args[0]);\n        if (surveyImportMode && args.length < 2) {\n            System.err.println(\"Startup validation failed: survey-import requires an estimated record count.\");\n            System.exit(ApplicationExitCodes.MISSING_REQUIRED_ARGUMENT);\n            return;\n        }\n\n        if (surveyImportMode) {\n            int estimatedRecords;\n            try {\n                estimatedRecords = SurveyProjectIntakeParser.parseEstimatedRecords(args[1]);\n            } catch (NumberFormatException exception) {\n                System.err.println(\"Startup validation failed: estimated record count must be a whole number.\");\n                System.exit(ApplicationExitCodes.INVALID_RECORD_COUNT);\n                return;\n            }\n\n            SurveyProject project = new SurveyProject(\"ATS-SURVEY-001\", estimatedRecords);\n            SurveyProjectReferenceService.addEstimatedRecords(project, 500);\n            SurveyProjectReferenceService.tryReplaceProject(project);\n            System.out.println(\"Caller project after local replacement attempt: \" + project.getProjectCode());\n        }\n\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 6.4 Convert NumberFormatException into controlled exit status",
          "why": "Handle invalid numeric input as a controlled application outcome. Rather than allowing the raw parsing failure to escape unpredictably, translate it into the process result that operations and automation can understand.",
          "software": "intellij",
          "action": {
            "action": "openFile",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java"
            }
          }
        },
        {
          "title": "Day 6.5 Preserve natural exit 0 on successful startup",
          "why": "Keep successful execution simple by allowing the main method to finish normally. An explicit success termination call is unnecessary when ordinary completion already communicates a successful process result.",
          "software": "intellij",
          "action": {
            "action": "setCode",
            "data": {
              "file": "src/com/ats/geospatial/GeospatialOperationsApplication.java",
              "code": "package com.ats.geospatial;\n\npublic class GeospatialOperationsApplication {\n    public static void main(String[] args) {\n        String applicationName = \"Geospatial Operations Tracking System\";\n        String startupStatus = \"Application started successfully.\";\n        System.out.println(applicationName);\n        RuntimeEnvironmentReport.print();\n\n        System.out.println(\"Startup argument count: \" + args.length);\n        if (args.length > 0) {\n            System.out.println(\"Startup mode: \" + args[0]);\n        }\n\n        boolean surveyImportMode = args.length > 0 && \"survey-import\".equals(args[0]);\n        if (surveyImportMode && args.length < 2) {\n            System.err.println(\"Startup validation failed: survey-import requires an estimated record count.\");\n            System.exit(ApplicationExitCodes.MISSING_REQUIRED_ARGUMENT);\n            return;\n        }\n\n        if (surveyImportMode) {\n            int estimatedRecords;\n            try {\n                estimatedRecords = SurveyProjectIntakeParser.parseEstimatedRecords(args[1]);\n            } catch (NumberFormatException exception) {\n                System.err.println(\"Startup validation failed: estimated record count must be a whole number.\");\n                System.exit(ApplicationExitCodes.INVALID_RECORD_COUNT);\n                return;\n            }\n\n            SurveyProject project = new SurveyProject(\"ATS-SURVEY-001\", estimatedRecords);\n            SurveyProjectReferenceService.addEstimatedRecords(project, 500);\n            SurveyProjectReferenceService.tryReplaceProject(project);\n            System.out.println(\"Caller project after local replacement attempt: \" + project.getProjectCode());\n        }\n\n        System.out.println(startupStatus);\n    }\n}"
            }
          }
        },
        {
          "title": "Day 6.6 Execute valid/missing/invalid/plain startup tests",
          "why": "Execute the complete startup test matrix: valid survey import, missing input, invalid input, and ordinary startup. QA should verify that each path produces the intended process result without breaking the earlier survey workflow.",
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
          "why": "Inspect the compiled classes again and confirm that the Day 6 changes remain compatible with Java 8. Exit-code handling must not silently change the technical target established at the beginning of Year 1.",
          "software": "powershell",
          "action": {
            "action": "runCommand",
            "data": {
              "command": "javap -classpath out -verbose com.ats.geospatial.ApplicationExitCodes com.ats.geospatial.GeospatialOperationsApplication",
              "output": "ApplicationExitCodes.class\\nmajor version: 52\\nGeospatialOperationsApplication.class\\nmajor version: 52",
              "exitCode": 0
            }
          }
        },
        {
          "title": "Day 6.8 Record Agile-style project methodology",
          "why": "Record the project methodology using the workflow actually practiced in this repository: ticket, engineering discussion, focused implementation, QA, commit, remote verification, and handoff. The answer should come from this real process rather than an invented employer story.",
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
          "why": "Update interview-question coverage for the process-exit and methodology questions exercised today. Earlier main-method concepts may be reinforced, but they should not receive duplicate primary completion.",
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
          "why": "Push and verify the Day 6 remote handoff. This commit closes the currently completed portion of the 500-day experience and becomes the starting state for the next engineering requirement.",
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
