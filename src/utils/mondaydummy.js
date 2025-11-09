import { createDateFromLocalText } from "./utils";

export function getDummyContext() {
  const res = {
    themeConfig: null,
    theme: "light",
    account: { id: "24603989" },
    user: {
      id: "72821851",
      isAdmin: true,
      isGuest: false,
      isViewOnly: false,
      countryCode: "IL",
      currentLanguage: "en",
      timeFormat: "12H",
      timeZoneOffset: 3,
    },
    region: "euc1",
    productKind: "10093110",
    app: { id: 10467866, clientId: "e2cb1e6edb7864a2d824f59dfd0685f4" },
    appVersion: {
      id: 10943131,
      name: "vue test",
      status: "live",
      type: "minor",
      versionData: {
        major: 1,
        minor: 9,
        patch: 0,
        number: 10,
        type: "minor",
        displayNumber: "v10",
      },
    },
    //boardId: 5048014529,
    //boardIds: [5048014529],
    boardId: 1647137427,
    boardIds: [1647137427],
    boardViewId: 32801439,
    viewMode: "fullScreen",
    instanceId: 32801439,
    instanceType: "board_view",
    workspaceId: 2460329,
    appFeature: { type: "AppFeatureBoardView", name: "Vue board view" },
    permissions: {
      approvedScopes: [
        "me:read",
        "boards:read",
        "docs:read",
        "workspaces:read",
        "users:read",
        "account:read",
        "updates:read",
        "assets:read",
        "tags:read",
        "teams:read",
        "webhooks:read",
      ],
      requiredScopes: [
        "me:read",
        "boards:read",
        "docs:read",
        "workspaces:read",
        "users:read",
        "account:read",
        "updates:read",
        "assets:read",
        "tags:read",
        "teams:read",
        "webhooks:read",
      ],
    },
  };
  return res;
}

export function getDummyBoardItems(boardid) {
  const res = {
    data: {
      boards: [
        {
          items_page: {
            items: [
              {
                name: "Analytics Series - Part 4",
                id: "2151602037",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Nir Katzir",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Task",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Monetization",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Analysis",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "GA to Sheets for Data Analysis",
                    id: "2151607541",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-19",
                      },
                    ],
                  },
                  {
                    name: "Player Onboarding Checkpoint Data System (FTUE)",
                    id: "2151610556",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Easy Analytics Data Management",
                    id: "2151609308",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Game Version Retention",
                    id: "5055429018",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "PO Review Me",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Android Bug",
                    id: "5076559397",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "In-App Purchase Integration (App Store) - remaining from sprint 27",
                id: "5068716782",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Matan Moskovich, Nir Katzir",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "M",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Shop",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Monetization",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-08",
                  },
                ],
                subitems: [
                  {
                    name: "Submit all items in the store",
                    id: "5068720506",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-01",
                      },
                    ],
                  },
                  {
                    name: "Tests",
                    id: "5068719330",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-08",
                      },
                    ],
                  },
                  {
                    name: "Change the boolean value to not developer mode to active the store",
                    id: "5068724043",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-08",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Thanksgiving Game Icon Update | Implement 🦃",
                id: "5027481355",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar, Nir Katzir",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Please Take Me 🥹",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Story",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "xS",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
              {
                name: "Galaxy A03 UI fix",
                id: "5063194472",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Bug",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "xS",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Big Bug",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-04",
                  },
                ],
                subitems: [],
              },
              {
                name: "The Last Task.",
                id: "5063022779",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Matan Moskovich",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Task",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Team Development",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Team Development",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-06",
                  },
                ],
                subitems: [
                  {
                    name: "Make UML for the store",
                    id: "5076344022",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-03",
                      },
                    ],
                  },
                  {
                    name: "Explain configuration (Store, apple)",
                    id: "5076347281",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-04",
                      },
                    ],
                  },
                  {
                    name: "Explain the code that i wrote recently",
                    id: "5076345337",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-04",
                      },
                    ],
                  },
                  {
                    name: "Remove all accesses to snooze",
                    id: "5079934805",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Matan Moskovich",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-06",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Contextual Placement of Tutorial Pop-ups",
                id: "5027504625",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Yair Klausner",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Code Review Me",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Task",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Onboarding",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "User Needs",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Planning",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
              {
                name: "Unit Testing Defenition",
                id: "5013224843",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar, Yair Klausner",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Technical Debt",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Build System",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Team Development",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-04",
                  },
                ],
                subitems: [
                  {
                    name: "לחקור על בניית Unit Testing",
                    id: "5046167636",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Technical Debt",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-23",
                      },
                    ],
                  },
                  {
                    name: "בניית פרוטוקול בchat gpt שיעזור לנו ליצור Unit Testing בצורה קלילה",
                    id: "5046167867",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Technical Debt",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-19",
                      },
                    ],
                  },
                  {
                    name: "בניית Unit Testing",
                    id: "5046167638",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar, Yair Klausner",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Technical Debt",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-02",
                      },
                    ],
                  },
                  {
                    name: "הרצות Unit Testing ובדיקה אם הכל עובד",
                    id: "5046167639",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Technical Debt",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-02",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Unity Update",
                id: "5046845968",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Yair Klausner, gil elazar, Nir Katzir",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Technical Debt",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "xS",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Are You Ready?",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-04",
                  },
                ],
                subitems: [],
              },
              {
                name: "History Jump Bug in IF",
                id: "2102753575",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Yair Klausner",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Bug",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Idea Forge",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Big Bug",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Planning",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "Loading data from cache before fetching from the database",
                    id: "5046407231",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Yair Klausner",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Bug",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-20",
                      },
                    ],
                  },
                  {
                    name: "Optimizing the loading process",
                    id: "5046407699",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Yair Klausner",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Code Review Me",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Bug",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-26",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Implement Heatmaps and Session Recordings Part 2 (implement in mobile)",
                id: "5039188988",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Task",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Minimum",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
              {
                name: "🎨Promotional Video",
                id: "2037549694",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Katerina sayko, Anastasia Kostyuk",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "xL",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Monetization",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Target",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Promotional Video Production",
                    id: "2037550068",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Katerina sayko, Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xL",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Find and add background music",
                    id: "5084318623",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Animate Mio",
                    id: "5084318929",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Create gamelpay animation of ZenZone",
                    id: "5084319013",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Animate Keidar",
                    id: "5084319129",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Create gameplay animation of Idea Forge",
                    id: "5084318805",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Animate Luna",
                    id: "5084318862",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Not selected yet",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Passive Merge Hint Animation (Dev)",
                id: "2037595299",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Nir Katzir",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Please Take Me 🥹",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Idea Forge",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "User Needs",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Target",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Analysis",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "Implement",
                    id: "2037596668",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Removed",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "How Many Coffees Do I need? ☕",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Idle Time Tracking",
                    id: "2154531332",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Merge Detection Logic",
                    id: "2154531512",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Hint Animation Trigger",
                    id: "2154532219",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Animation Loop Control",
                    id: "2154532381",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "Interrupt Handling",
                    id: "2154532539",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Nir Katzir",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Fix Video Stretching on Pre-Game Loading Screen",
                id: "5071289240",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Anastasia Kostyuk, Yair Klausner",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Please Take Me 🥹",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Bug",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Target",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
              {
                name: "Pre-Game Loading Screen Animation Implementation",
                id: "2070764876",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Yair Klausner",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Wait",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "M",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Personal Development",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Target",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Analysis",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-10-19",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Redesign the Initial Loading Screen",
                    id: "2070767704",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-08-19",
                      },
                    ],
                  },
                  {
                    name: "🎨Animate Elements of the Loading Screen",
                    id: "2070767715",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-08-19",
                      },
                    ],
                  },
                  {
                    name: "🧑‍💻 Implement the New Loading Screen",
                    id: "2070767711",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Yair Klausner",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-19",
                      },
                    ],
                  },
                  {
                    name: "🧑‍💻 Loading Logic - Core Flow",
                    id: "2154542449",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Yair Klausner",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Please Take Me 🥹",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-19",
                      },
                    ],
                  },
                ],
              },
              {
                name: "🎨First-Time ״Out of Energy״ Flow",
                id: "2116279388",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Onboarding",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Game Content",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "🎨“Almost Out of Energy” Warning Pop-up - design - support :)",
                    id: "2116282182",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Removed",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "🎨“Out of Energy (First-Time)” Pop-up - design - support :)",
                    id: "2116282949",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Removed",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                  {
                    name: "“Almost Out of Energy” Warning Pop-up | dev",
                    id: "2116282371",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-17",
                      },
                    ],
                  },
                  {
                    name: "“Out of Energy (First-Time)” Pop-up | dev",
                    id: "2116283075",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "gil elazar",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "xS",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "🎨Redesign Game Top Bar Hourglass",
                id: "2136447824",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Anastasia Kostyuk",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "M",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Decision",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-03",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Hourglass Icon Design",
                    id: "5004189802",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-26",
                      },
                    ],
                  },
                  {
                    name: "🎨Top Bar Design",
                    id: "5004189834",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-31",
                      },
                    ],
                  },
                ],
              },
              {
                name: "🎨GP icon Design",
                id: "5055149263",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Katerina sayko",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Please Take Me 🥹",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Story",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Vision",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
              {
                name: "🎨New Resident Mío 👤",
                id: "5063290413",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Anastasia Kostyuk",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Work In Progress",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "L",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "General",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Game Content",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Committed",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Mood Board Creation",
                    id: "5063290453",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-05",
                      },
                    ],
                  },
                  {
                    name: "🎨Sketches & silhouette",
                    id: "5071218380",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Task",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-11-05",
                      },
                    ],
                  },
                  {
                    name: "🎨Character Illustration",
                    id: "5063290478",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Anastasia Kostyuk",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Work In Progress",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "M",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "",
                      },
                    ],
                  },
                ],
              },
              {
                name: "🎨Unique Pop-up Design per Plant",
                id: "5027523759",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Katerina sayko",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "M",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Zen Zone",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Game Content",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Analysis",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-03",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Design",
                    id: "5027523953",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Katerina sayko",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-29",
                      },
                    ],
                  },
                ],
              },
              {
                name: "🎨Visualize Zero-Energy Item Sales Clearly",
                id: "5024746691",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "Katerina sayko",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Done",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Epic",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Idea Forge",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Disruptions",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Decision",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "2025-11-03",
                  },
                ],
                subitems: [
                  {
                    name: "🎨Design",
                    id: "5024747193",
                    column_values: [
                      {
                        column: {
                          id: "multiple_person_mkt7ggz9",
                          title: "Assigned",
                        },
                        text: "Katerina sayko",
                      },
                      {
                        column: {
                          id: "status4__1",
                          title: "Status",
                        },
                        text: "Done",
                      },
                      {
                        column: {
                          id: "status__1",
                          title: "Issue Type",
                        },
                        text: "Story",
                      },
                      {
                        column: {
                          id: "status_17__1",
                          title: "Story Points",
                        },
                        text: "S",
                      },
                      {
                        column: {
                          id: "date_mkt3mnnt",
                          title: "SubItemDoneDate",
                        },
                        text: "2025-10-30",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Unit Testing - shop manager",
                id: "5079844962",
                column_values: [
                  {
                    column: {
                      id: "subitems__1",
                      title: "Subitems",
                    },
                    text: null,
                  },
                  {
                    column: {
                      id: "multiple_person_mkr4pbc8",
                      title: "Assigned",
                    },
                    text: "gil elazar",
                  },
                  {
                    column: {
                      id: "status",
                      title: "Status",
                    },
                    text: "Please Take Me 🥹",
                  },
                  {
                    column: {
                      id: "status_13__1",
                      title: "Issue Type",
                    },
                    text: "Technical Debt",
                  },
                  {
                    column: {
                      id: "status_19__1",
                      title: "Story Points",
                    },
                    text: "S",
                  },
                  {
                    column: {
                      id: "color_mkperz3j",
                      title: "Domain",
                    },
                    text: "Shop",
                  },
                  {
                    column: {
                      id: "color_mkr3bggc",
                      title: "Strategic Category",
                    },
                    text: "Team Development",
                  },
                  {
                    column: {
                      id: "color_mktax0mb",
                      title: "Goal Category",
                    },
                    text: "Outstanding",
                  },
                  {
                    column: {
                      id: "color_mktjp2gz",
                      title: "Planning State",
                    },
                    text: "Decision",
                  },
                  {
                    column: {
                      id: "date_mkt3a60q",
                      title: "DoneDate",
                    },
                    text: "",
                  },
                ],
                subitems: [],
              },
            ],
          },
        },
      ],
    },
  };

  return res;
}
