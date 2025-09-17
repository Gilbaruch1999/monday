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
   //boardId: 1647137427,
   //boardIds: [1647137427],
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
              "name": "סידורי אנליטיקס - חלק ג׳",
              "id": "2117457020",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "GA4 Research",
                  "id": "2119027638",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-08-27"
                    }
                  ]
                },
                {
                  "name": "Current State Review",
                  "id": "2119027854",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-08-31"
                    }
                  ]
                },
                {
                  "name": "Instrumentation & Naming",
                  "id": "2119019086",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-01"
                    }
                  ]
                },
                {
                  "name": "GA4 Configuration",
                  "id": "2119019882",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-03"
                    }
                  ]
                },
                {
                  "name": "שחרור גרסה",
                  "id": "2136226484",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "DAU/WAU/MAU Dashboards",
                  "id": "2119020419",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "Active Streak Visuals",
                  "id": "2119020763",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "Retention Analysis",
                  "id": "2119021794",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - DAU/WAU/MAU 📊 (להשאיר)",
                  "id": "2048626035",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-01"
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - Active Streak Days 📊 (להשאיר)",
                  "id": "2048640598",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-01"
                    }
                  ]
                },
                {
                  "name": "עדכוני דרכי הצגה - Retention 📊 (להשאיר)",
                  "id": "2048640717",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-01"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Inspiration Pouch Level 2 (Design)",
              "id": "2112710977",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-10"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Second Dreambloom upgrade Integration (Dev)",
              "id": "2112712787",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-14"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Upgrade Detection Logic",
                  "id": "2130966576",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Code Review Me"
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
                      "text": "2025-09-14"
                    }
                  ]
                },
                {
                  "name": "Visual Swap to Level 2 Plant",
                  "id": "2130973564",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Code Review Me"
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
                      "text": "2025-09-14"
                    }
                  ]
                },
                {
                  "name": "Progression State Update",
                  "id": "2130975325",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Thired Dreambloom upgrade Integration (Dev)",
                  "id": "2148480577",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "החלפת תמונות (מפתח, שתיל, מנעול מעל אדמה)",
                  "id": "2148658779",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "לשנות טקסט בבסיס של הפואפ שיהיה בר שינוי (scriptable object)",
                  "id": "2148678653",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Unlocking the second Inspiration Pouch",
                  "id": "2131000238",
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
                      "text": "Pending - ToDo"
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
              "name": "Spotlight & Hand Animation for First Sale  (dev)",
              "id": "2112827251",
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
                  "text": "L"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-13"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Implement onboarding Spotlight Effect on Hand",
                  "id": "2131144540",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Implement Hand Movement Animation",
                  "id": "2131151096",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Trigger Spotlight & Animation only During First Sale",
                  "id": "2131157425",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "S"
                    },
                    {
                      "column": {
                        "id": "date_mkt3mnnt",
                        "title": "SubItemDoneDate"
                      },
                      "text": "2025-09-11"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Block Gameplay Until Board is Filled (dev)",
              "id": "2112830277",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-13"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Implement Board Full Check",
                  "id": "2131079955",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
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
                  "name": "Block Gameplay Start Until Board is Full",
                  "id": "2131082700",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
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
                  "name": "Enable Gameplay Immediately Once Full",
                  "id": "2131085606",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
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
                  "name": "Integrate with Onboarding Flow",
                  "id": "2131088636",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
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
              "name": "Ginkgo Cadence Level 1/12 | NEW PLANT 🌱  (design)",
              "id": "2116606633",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-08"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Planning"
                }
              ],
              "subitems": [
                {
                  "name": "Sketch & Ideation (Item & main set Idea)",
                  "id": "2129009672",
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
                      "text": "2025-09-08"
                    }
                  ]
                },
                {
                  "name": "Production",
                  "id": "2129009864",
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
                      "text": "2025-09-08"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Exercise 1 Finalization",
              "id": "2102477132",
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
                  "text": "Katerina sayko, Matan Moskovich"
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
                  "text": "Growth Galaxy"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Done"
                }
              ],
              "subitems": [
                {
                  "name": "design",
                  "id": "2102554557",
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
                      "text": "2025-09-02"
                    }
                  ]
                },
                {
                  "name": "dev",
                  "id": "2102554561",
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
                      "text": "Design Review Me"
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
              "name": "Design one idea item - Level 1/15 | Timeless Lantern Set",
              "id": "2123707447",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-08"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 2/15  | Timeless Lantern Set",
              "id": "2123712213",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-10"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 3/15  | Timeless Lantern Set",
              "id": "2123713622",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-14"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 4/15  | Timeless Lantern Set",
              "id": "2123712317",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-15"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 5/15 | Timeless Lantern Set",
              "id": "2123712255",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-16"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 6/15  | Timeless Lantern Set",
              "id": "2123712278",
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
                  "text": "Minimum"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 9/12 | Inspiration﻿ Pouch Set",
              "id": "2123714795",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-16"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Sketch & Ideation 3 new items",
                  "id": "2129001801",
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
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "Production of one item",
                  "id": "2129005121",
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
                      "text": "2025-09-15"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Design one idea item - Level 10/12 | Inspiration﻿ Pouch Set",
              "id": "2123715162",
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
                  "text": "Minimum"
                },
                {
                  "column": {
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-16"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Data Restore",
              "id": "2135388937",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": "2025-09-07"
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": []
            },
            {
              "name": "באגים הקדמה",
              "id": "2136241246",
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
                  "text": "Code Review Me"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "כאשר יש כמה דברים למכור ורק אחד מהם נכון יכול לגרור והמכירה הבאה תופיע",
                  "id": "2138118450",
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
                      "text": "2025-09-16"
                    }
                  ]
                },
                {
                  "name": "אחרי כמה מכירות יוצאים ונכנסים וקיידר נעלם",
                  "id": "2138118766",
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
                      "text": "2025-09-09"
                    }
                  ]
                },
                {
                  "name": "כאשר גורר והמכירה נעשתה אז המכירה הבאה מופיעה אבל הitem עצמו לא נמחק",
                  "id": "2138118562",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "אפשר למכור כל דבר לצמח הנעול או למגבת הנעולה",
                  "id": "2138118692",
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
                      "text": "2025-09-13"
                    }
                  ]
                },
                {
                  "name": "כאשר פותחים את המגבת הנעולה יוצאים וחוזרים פנימה זה פשוט ריבוע לבן",
                  "id": "2138118628",
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
                      "text": "2025-09-11"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Merge Animation - Implement",
              "id": "2071209571",
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
                  "text": "Idea Forge"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "Cleanup",
                  "id": "2092347165",
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
                      "text": "2025-08-13"
                    }
                  ]
                },
                {
                  "name": "New Animation as PNG sequence",
                  "id": "2112741891",
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
                      "text": "2025-08-24"
                    }
                  ]
                },
                {
                  "name": "Implement",
                  "id": "2071209609",
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
                      "text": "Working in Progress"
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
                      "text": "2025-09-04"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Faint Outline After Receiving Idea Box (Dev)",
              "id": "2102764535",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "שינוי המיקום של הבחור למכירה",
                  "id": "2131134913",
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
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
                  "name": "הזזה ימינה רק ברגע שיש לך אפשרות להשיג עוד קופסא",
                  "id": "2131138251",
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
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
              "name": "Inspiration Pouch Level 3 (Design)",
              "id": "2112711191",
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
                  "text": "Target"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "New Quests",
              "id": "2123691337",
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
                  "text": "Code Review Me"
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
                  "text": "xS"
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
                  "text": "Target"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Stage 14",
                  "id": "2129509097",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Stage 15",
                  "id": "2129509359",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Stage 16",
                  "id": "2129509703",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Stage 17",
                  "id": "2141797535",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Stage 18",
                  "id": "2141797553",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Stage 19",
                  "id": "2141797569",
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
                      "text": "2025-09-11"
                    }
                  ]
                }
              ]
            },
            {
              "name": "Design one idea item - Level 8/15  | Timeless Lantern Set",
              "id": "2123712585",
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
                  "text": "Target"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 7/15  | Timeless Lantern Set",
              "id": "2123712603",
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
                  "text": "Target"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Design one idea item - Level 11/12 | Inspiration﻿ Pouch Set",
              "id": "2123714991",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": []
            },
            {
              "name": "Ginkgo Cadence Purchase Pop Up",
              "id": "2123717442",
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
                  "text": "Nir Katzir, gil elazar"
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
                  "text": "Target"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "Design - Mental Help :)))))))",
                  "id": "2123719665",
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
                      "text": "Not selected yet"
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
                  "id": "2123719670",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
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
                      "text": "Not selected yet"
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
                  "name": "Progression Check Integration",
                  "id": "2131013951",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Gate Purchase Button",
                  "id": "2131021528",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Payment Transaction",
                  "id": "2131025250",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Add Plant to Zen Zone",
                  "id": "2131038110",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Pop-up Implementation",
                  "id": "2131044861",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Progression State Update",
                  "id": "2131049397",
                  "column_values": [
                    {
                      "column": {
                        "id": "multiple_person_mkt7ggz9",
                        "title": "Assigned"
                      },
                      "text": "Nir Katzir"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "Unlocking Timeless Lantern",
                  "id": "2131057186",
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
                      "text": "Pending - ToDo"
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
              "name": "🧩Bug fixes-GG",
              "id": "2102744998",
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
                  "text": "Growth Galaxy"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Analysis"
                }
              ],
              "subitems": [
                {
                  "name": "Data Persistence in GG",
                  "id": "2102750955",
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
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "Automatic Stage Completion Popup",
                  "id": "2102751533",
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
                      "text": "Working in Progress"
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
                },
                {
                  "name": "Black Text Box Duplication",
                  "id": "2102753255",
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
                      "text": "Pending - ToDo"
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
                      "text": "Not selected yet"
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
              "name": "Differentiation Between Item Colors in Selling",
              "id": "2102766100",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Analysis"
                }
              ],
              "subitems": []
            },
            {
              "name": "🛠️Bug Fixes - General Issues",
              "id": "2102770222",
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Analysis"
                }
              ],
              "subitems": [
                {
                  "name": "Text Spacing in Tutorial",
                  "id": "2102770459",
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
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
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
              "name": "First-Time Out of Energy Flow",
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
                  "text": "Matan Moskovich, Anastasia Kostyuk"
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
                    "id": "date_mkt3a60q",
                    "title": "DoneDate"
                  },
                  "text": ""
                },
                {
                  "column": {
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "Committed"
                }
              ],
              "subitems": [
                {
                  "name": "“Almost Out of Energy” Warning Pop-up - design - support :)",
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
                      "text": "Pending - ToDo"
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
                      "text": "Matan Moskovich"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
                  "name": "“Out of Energy (First-Time)” Pop-up - design - support :)",
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
                      "text": "Pending - ToDo"
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
                      "text": "Matan Moskovich"
                    },
                    {
                      "column": {
                        "id": "status4__1",
                        "title": "Status"
                      },
                      "text": "Pending - ToDo"
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
              "name": "GG Bag",
              "id": "2135392162",
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
                  "text": "Growth Galaxy"
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
                  "text": "Outstanding"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "Remove the NevBar",
                  "id": "2140762238",
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
                      "text": "2025-09-11"
                    }
                  ]
                },
                {
                  "name": "Add the BackButton",
                  "id": "2140762642",
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
                      "text": "2025-09-12"
                    }
                  ]
                },
                {
                  "name": "Save progress",
                  "id": "2140763199",
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
                      "text": "2025-09-15"
                    }
                  ]
                },
                {
                  "name": "Find the tricky bug and fix it",
                  "id": "2140764103",
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
                      "text": "2025-09-13"
                    }
                  ]
                }
              ]
            },
            {
              "name": "באג בideaforage",
              "id": "2152447623",
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
                  "text": "Please Take Me 🥹"
                },
                {
                  "column": {
                    "id": "status_13__1",
                    "title": "Issue Type"
                  },
                  "text": "What Flavor Is This? 🍦"
                },
                {
                  "column": {
                    "id": "status_19__1",
                    "title": "Story Points"
                  },
                  "text": "How Many Coffees Do I need? ☕"
                },
                {
                  "column": {
                    "id": "color_mkperz3j",
                    "title": "Domain"
                  },
                  "text": "Where We At? 🕵️‍♂️"
                },
                {
                  "column": {
                    "id": "color_mkr3bggc",
                    "title": "Strategic Category"
                  },
                  "text": "Why Though? 🤨"
                },
                {
                  "column": {
                    "id": "color_mktax0mb",
                    "title": "Goal Category"
                  },
                  "text": "How bad do you want it? 😤"
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
                    "id": "color_mktjp2gz",
                    "title": "Planning State"
                  },
                  "text": "New"
                }
              ],
              "subitems": [
                {
                  "name": "אחרי קבלת הפאוץ הוא לא עובר לidea forage ואי אפשר להוסיף אותו(יכול להיות כי לא עשיתי ריסט להכל וזה מתבלבל בגלל הלימוד שאמור להיות שם אז אני לא בטוח",
                  "id": "2152447973",
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
                      "text": "Pending - ToDo"
                    },
                    {
                      "column": {
                        "id": "status__1",
                        "title": "Issue Type"
                      },
                      "text": "Not selected yet"
                    },
                    {
                      "column": {
                        "id": "status_17__1",
                        "title": "Story Points"
                      },
                      "text": "Not selected yet"
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
