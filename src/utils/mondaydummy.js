import { createDateFromLocalText } from "./utils"

export function getDummyContext() {
  const res = {
    themeConfig: null,
    theme: 'light',
    account: { id: '24603989' },
    user: {
      id: '72821851',
      isAdmin: true,
      isGuest: false,
      isViewOnly: false,
      countryCode: 'IL',
      currentLanguage: 'en',
      timeFormat: '12H',
      timeZoneOffset: 3,
    },
    region: 'euc1',
    productKind: '10093110',
    app: { id: 10467866, clientId: 'e2cb1e6edb7864a2d824f59dfd0685f4' },
    appVersion: {
      id: 10943131,
      name: 'vue test',
      status: 'live',
      type: 'minor',
      versionData: {
        major: 1,
        minor: 9,
        patch: 0,
        number: 10,
        type: 'minor',
        displayNumber: 'v10',
      },
    },
   //boardId: 5048014529,
   //boardIds: [5048014529],
   boardId: 1647137427,
   boardIds: [1647137427],
    boardViewId: 32801439,
    viewMode: 'fullScreen',
    instanceId: 32801439,
    instanceType: 'board_view',
    workspaceId: 2460329,
    appFeature: { type: 'AppFeatureBoardView', name: 'Vue board view' },
    permissions: {
      approvedScopes: [
        'me:read',
        'boards:read',
        'docs:read',
        'workspaces:read',
        'users:read',
        'account:read',
        'updates:read',
        'assets:read',
        'tags:read',
        'teams:read',
        'webhooks:read',
      ],
      requiredScopes: [
        'me:read',
        'boards:read',
        'docs:read',
        'workspaces:read',
        'users:read',
        'account:read',
        'updates:read',
        'assets:read',
        'tags:read',
        'teams:read',
        'webhooks:read',
      ],
    },
  }
  return res
}


export function getDummyBoardItems(boardid) {

  const res = {
  "data": {
    "boards": [
      {
        "items_page": {
          "items": [
            {
              "name": "In-App Purchase Integration (App Store) - remaining from sprint 26",
              "id": "5016186028",
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
                  "text": "Matan Moskovich, Dan Bouzaglo"
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
                  "text": "Story"
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
                  "text": "Shop"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Monetization"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Take from Nir all the info",
                  "id": "5044483166",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "2025-10-22"
                    }
                  ]
                },
                {
                  "name": "Reaserch about how purchases work with app store",
                  "id": "5044490048",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "2025-10-22"
                    }
                  ]
                },
                {
                  "name": "Create IOS IAP",
                  "id": "5044488383",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "2025-10-23"
                    }
                  ]
                },
                {
                  "name": "Create the IOS Cashier",
                  "id": "5044487323",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "2025-10-23"
                    }
                  ]
                },
                {
                  "name": "Build and publish for test",
                  "id": "5062900133",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                },
                {
                  "name": "Test and see if it works",
                  "id": "5044490923",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                },
                {
                  "name": "Add items to the store",
                  "id": "5057672665",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Change the boolean value to real puraching",
                  "id": "5057675539",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Bug - after quest",
              "id": "5041086648",
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
                  "text": "Yair Klausner"
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
                  "text": "M"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Idea Forge"
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
                  "text": "2025-10-19"
                }
              ],
              "subitems": []
            },
            {
              "name": "Unit Testing Defenition",
              "id": "5013224843",
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
                  "text": "gil elazar, Yair Klausner"
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
                  "text": "Technical Debt"
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
                  "text": "Build System"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "לחקור על בניית Unit Testing",
                  "id": "5046167636",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                      "text": "2025-10-23"
                    }
                  ]
                },
                {
                  "name": "בניית פרוטוקול בchat gpt שיעזור לנו ליצור Unit Testing בצורה קלילה",
                  "id": "5046167867",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                      "text": "2025-10-19"
                    }
                  ]
                },
                {
                  "name": "בניית Unit Testing",
                  "id": "5046167638",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar, Yair Klausner"
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
                      "text": "Technical Debt"
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
                },
                {
                  "name": "הרצות Unit Testing ובדיקה אם הכל עובד",
                  "id": "5046167639",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                },
                {
                  "name": "הסבר לחברי הצוות על עבודה מול Unit Testing ואיך בונים ומוסיפים",
                  "id": "5046167642",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
              "name": "Release Testing",
              "id": "5013234125",
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
                  "text": "gil elazar"
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
                  "text": "Technical Debt"
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
                  "text": "Build System"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Team Development"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "לחקור על בניית טסטים לקראת סוף ספרינט",
                  "id": "5046101963",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                },
                {
                  "name": "בניית טסטים",
                  "id": "5046103260",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                },
                {
                  "name": "הרצות טסטים ובדיקה אם הכל עובד",
                  "id": "5046103802",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
                },
                {
                  "name": "הסבר לחברי הצוות על עבודה מול טסטים",
                  "id": "5046103898",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "Technical Debt"
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
              "name": "Update Native Pages for 16KB Support",
              "id": "5006058096",
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
                  "text": "gil elazar"
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
                  "text": "Technical Debt"
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
                  "text": "Build System"
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Implement Heatmaps and Session Recordings Part 2 (Tests)",
              "id": "5039188988",
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
                  "text": "gil elazar"
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
                  "text": "Task"
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
                  "text": "General"
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "History Jump Bug in IF",
              "id": "2102753575",
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
                  "text": "Yair Klausner"
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
                  "text": "Bug"
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
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Big Bug"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Loading data from cache before fetching from the database",
                  "id": "5046407231",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
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
                      "text": "Bug"
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
                      "text": "2025-10-20"
                    }
                  ]
                },
                {
                  "name": "Optimizing the loading process",
                  "id": "5046407699",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
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
                      "text": "Bug"
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
              "name": "🎨Tutorial Background Darkness Adjustment",
              "id": "5027495653",
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
                  "text": "Yair Klausner"
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
                  "text": "Bug"
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
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "5027495800",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-10-26"
                    }
                  ]
                },
                {
                  "name": "Changing the overlay transparency in the first onboarding",
                  "id": "5046416760",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
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
                      "text": "Bug"
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
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "The remaining tutorials",
                  "id": "5046418587",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
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
                      "text": "Bug"
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
              "name": "Contextual Placement of Tutorial Pop-ups",
              "id": "5027504625",
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
                  "text": "Yair Klausner"
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
                  "text": "Task"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Fix Oversized Nav Bar Icons on Some Devices",
              "id": "5024787076",
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
                  "text": "Matan Moskovich"
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
                  "text": "Bug"
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
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-10-22"
                }
              ],
              "subitems": [
                {
                  "name": "Samsung A52",
                  "id": "5046751034",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "Bug"
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
                      "text": ""
                    }
                  ]
                }
              ]
            },
            {
              "name": "Animated Merge Demonstration During Onboarding",
              "id": "5027505993",
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
                  "text": "Matan Moskovich"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Code Review Me"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Enable idea Box Merge",
              "id": "5004147437",
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
                  "text": "Matan Moskovich"
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
                  "text": "Story"
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
                  "text": "Idea Forge"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Big Bug"
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
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "Use merge logic",
                  "id": "5044511810",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Merge animation",
                  "id": "5044514295",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Define next level for idea boxes",
                  "id": "5044519562",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Matan Moskovich"
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
              "name": "Single Click Tutorial Progress",
              "id": "2137213996",
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
                  "text": "Nir Katzir"
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
                  "text": "Bug"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-10-22"
                }
              ],
              "subitems": []
            },
            {
              "name": "Hide Sell Button When Item Cannot Be Sold",
              "id": "5024797311",
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
                  "text": "Matan Moskovich"
                },
                {
                  "column": {
                    "id": "status",
                    "title": "Status"
                  },
                  "text": "Code Review Me"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "Story"
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
                  "text": "Idea Forge"
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
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "Lantern Set Item Sync",
              "id": "5027761711",
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
                  "text": "gil elazar"
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
                  "text": "Bug"
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
                  "text": "Idea Forge"
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
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-10-25"
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design one idea item - Level 13/15 | Timeless Lantern Set",
              "id": "2147835635",
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
                  "text": "Story"
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
                  "text": "Idea Forge"
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
                  "text": "2025-10-19"
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Cap Full Message UI",
              "id": "5027452777",
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
                  "text": "Anastasia Kostyuk, Matan Moskovich"
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
                  "text": "Idea Forge"
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
                  "text": "Target"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-10-21"
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "5027454189",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-10-21"
                    }
                  ]
                },
                {
                  "name": "Dev",
                  "id": "5027455215",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
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
              "name": "🎨Narrative Pop-up Redesign",
              "id": "5024492195",
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
                  "text": "Matan Moskovich, Anastasia Kostyuk"
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
                  "text": "Growth Galaxy"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "5024493644",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                      "text": "2025-10-21"
                    }
                  ]
                },
                {
                  "name": "Dev",
                  "id": "5024498286",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
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
              "name": "🎨Full Character Design | Kaider 🐟",
              "id": "1873950413",
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
                  "text": "Story"
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
                  "text": "General"
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
                  "text": "Planning"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-10-20"
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨First-Time Out of Energy Flow",
              "id": "2116279388",
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
                  "text": "gil elazar"
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
                  "text": "Onboarding"
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
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨“Almost Out of Energy” Warning Pop-up - design - support :)",
                  "id": "2116282182",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Removed"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "“Almost Out of Energy” Warning Pop-up | dev",
                  "id": "2116282371",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "2025-10-17"
                    }
                  ]
                },
                {
                  "name": "🎨“Out of Energy (First-Time)” Pop-up - design - support :)",
                  "id": "2116282949",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Removed"
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
                      "text": "xS"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "“Out of Energy (First-Time)” Pop-up | dev",
                  "id": "2116283075",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "xS"
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
              "name": "Fix UI State on Return to Idea Forge",
              "id": "2081431584",
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
                  "text": "Yair Klausner"
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
                  "text": "Bug"
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
                  "text": "Idea Forge"
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
                  "text": "2025-10-21"
                }
              ],
              "subitems": [
                {
                  "name": "Fast loading research for idea forge",
                  "id": "2147667371",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
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
                      "text": "Spike"
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
                      "text": "2025-10-21"
                    }
                  ]
                },
                {
                  "name": "Implement",
                  "id": "2147668574",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Yair Klausner"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Removed"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Bug"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "How Many Coffees Do I need? ☕"
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
              "name": "🎨Design one idea item - Level 12/14 | Timeless Lantern Set (update)",
              "id": "2147835618",
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
                  "text": "Story"
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
                  "text": "Idea Forge"
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
                  "text": "2025-10-23"
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design one idea item - Level 13/14 | Timeless Lantern Set  (update)",
              "id": "2147835612",
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
                  "text": "Story"
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
                  "text": "Idea Forge"
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
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Design one idea item - Level 14/14 | Timeless Lantern Set (update)",
              "id": "5058509481",
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
                  "text": "Story"
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
                  "text": "Idea Forge"
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
                  "text": ""
                }
              ],
              "subitems": []
            },
            {
              "name": "🎨Redesign Game Top Bar Hourglass",
              "id": "2136447824",
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
                  "text": "Anastasia Kostyuk, gil elazar"
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
                  "text": "General"
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
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Hourglass Icon Design",
                  "id": "5004189802",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                      "text": "2025-10-26"
                    }
                  ]
                },
                {
                  "name": "🎨Top Bar Design",
                  "id": "5004189834",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                },
                {
                  "name": "Development",
                  "id": "5004189852",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Wait"
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
                },
                {
                  "name": "Hourglass System Integration",
                  "id": "2080800503",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "gil elazar"
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
                      "text": "How Many Coffees Do I need? ☕"
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
              "name": "🎨Unique Pop-up Design per Plant",
              "id": "5027523759",
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
                  "text": "Anastasia Kostyuk"
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
                  "text": "Zen Zone"
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
                  "text": "Outstanding"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Analysis"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "5027523953",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                },
                {
                  "name": "Dev",
                  "id": "5027524791",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
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
              "name": "🎨Visualize Zero-Energy Item Sales Clearly",
              "id": "5024746691",
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
                  "text": "Anastasia Kostyuk"
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
                  "text": "Idea Forge"
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
                  "text": "Decision"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                }
              ],
              "subitems": [
                {
                  "name": "🎨Design",
                  "id": "5024747193",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Anastasia Kostyuk"
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
                      "text": "How Many Coffees Do I need? ☕"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": ""
                    }
                  ]
                },
                {
                  "name": "Dev",
                  "id": "5024748327",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": ""
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
                      "text": "How Many Coffees Do I need? ☕"
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
            }
          ]
        }
      }
    ]
  }
}

  return res
}
