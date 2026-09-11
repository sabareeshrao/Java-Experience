# QUESTION PROGRESS

## DAY 2 / 500

**DAYS LEFT: 498**

## Overall coverage

| Metric | Count |
| --- | ---: |
| Unique questions in study path | 2008 |
| Completed | 10 |
| In progress | 1 |
| Pending | 1997 |
| Duplicate primary assignments | 0 |

## Day 2 completed questions

| Family ID | Question | Primary coverage | Ticket |
| --- | --- | --- | --- |
| QF-003-005 | Can a machine have multiple versions of JDK or JRE installed? | Y1-D002 | ATS-Y1-002 |
| QF-003-001 | Can you tell me what JVM is and how it works? | Y1-D002 | ATS-Y1-002 |
| QF-003-002 | If you were explaining to new developers how Java code executes, how would you describe the role of JVM in running a simple Java program that prints Hello World? | Y1-D002 | ATS-Y1-002 |
| QF-003-003 | Can you tell me the difference between JDK, JRE and JVM? | Y1-D002 | ATS-Y1-002 |

## Reinforced today

| Family ID | Question | Primary coverage | Reinforcement |
| --- | --- | --- | --- |
| QF-003-004 | What is the role of the JVM in making Java platform-independent? | Y1-D001 | Y1-D002 |

## Still in progress

| Family ID | Question | Started | Reinforcement | Reason not complete yet |
| --- | --- | --- | --- | --- |
| QF-002-004 | Can you tell me the tools that you are familiar with while working as a Java developer? | Y1-D001 | Y1-D002 | The toolset is still intentionally small and will expand through JDBC, MySQL, Tomcat, Maven, Spring, Postman, Linux and later project stages. |

## Status-registry rule

The source workbook contains all **2,008** unique study-path questions. `question-coverage/question-status.csv` records every question that has entered development as `COMPLETED` or `IN_PROGRESS`. Questions not yet present in that CSV are counted as `PENDING` until their primary development day is assigned.

This keeps the Git file compact while still preventing duplicate primary coverage.

## Coverage rules

- Every unique question receives at most one primary completion day.
- Later appearances are recorded as reinforcement, not another completion.
- `PENDING` questions are preferred when choosing interview coverage for a new day.
- A question is not marked complete just because its keyword appeared in code.
- Year-end audits must have zero missing questions assigned to that year before progressing.
