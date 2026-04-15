/* cspell:disable */
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

  "data": {
    "boards": [
      {
        "items_page": {
          "items": [
            {
              "name": "Real Player PvP System - Part B",
              "id": "2789686704",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2026-04-13"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Setup lobby creation",
                  "id": "2728207074",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-03-26"
                    }
                  ]
                },
                {
                  "name": "Create room owner rules",
                  "id": "2728189856",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-13"
                    }
                  ]
                },
                {
                  "name": "Add multiplayer support",
                  "id": "2728207338",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-13"
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Trophy Progress Bar Visualization",
              "id": "2802069638",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko, Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2026-04-14"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design (Progress Bar)",
                  "id": "2803022813",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-05"
                    }
                  ]
                },
                {
                  "name": "🎨Design (Reward Card)",
                  "id": "2803035364",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-09"
                    }
                  ]
                },
                {
                  "name": "Development",
                  "id": "2803035985",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-14"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Implement Trophy System (Display + Calculation)",
              "id": "2835569121",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "L"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Game Content"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Are You Ready?"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Import firebase firestore module",
                  "id": "2835569002",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-14"
                    }
                  ]
                },
                {
                  "name": "Create Firebase Firestore data structure",
                  "id": "2835569159",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-15"
                    }
                  ]
                },
                {
                  "name": "Create Trophy logic for save / load",
                  "id": "2835567582",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Task"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Release iOS Build",
              "id": "2803332316",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Dan Bouzaglo, Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Task"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Release All Stores Build (Israel Only)",
              "id": "2822209316",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Wait"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Task"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "No Effort"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "General"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Cap Sale Energy cost at 40 in Brain Storm",
              "id": "2822454911",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Task"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨First-Time Player Guidance & Lightweight Onboarding",
              "id": "2823356851",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Onboarding"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "User Needs"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2835541442",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-14"
                    }
                  ]
                },
                {
                  "name": "Development",
                  "id": "2835515999",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Asaf Bashari"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Freeze Booster Charge & Usage btn - design",
              "id": "2803018193",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Work In Progress"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2809516900",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Work In Progress"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Freeze Booster In-Game Animation - design",
              "id": "2803041109",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2811161240",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "M"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨Booster Unlock Celebration (100 Trophies)  - design",
              "id": "2802163717",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2809703178",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Please Take Me 🥹"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "🎨End Match Buttons Update (Close + Play Again) - design",
              "id": "2804427838",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Katerina sayko"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Epic"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "S"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Vision"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2026-04-15"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "2822454541",
                  "board": {
                    "id": "1647137428"
                  },
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Katerina sayko"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Done"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Story"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2026-04-14"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Fix Missing Background Behind Trophy Count",
              "id": "2790391938",
              "column_values": [
                {
                  "column": {
                    "id": "subitems__1",
                    "title": "Subitems"
                  },
                  "text": null
                },
                {
                  "column": {
                    "id": "multiple_person_mkr4pbc8",
                    "title": "Assigned"
                  },
                  "text": "Asaf Bashari"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Done"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Technical Debt"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "xS"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Brain Storm"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Disruptions"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2026-04-12"
                },
                {
                  "column": {
                    "id": "numeric_mkyvj8qw",
                    "title": "Value Score"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            }
          ]
        }
      }
    ]
  }
}


  return res;
}
