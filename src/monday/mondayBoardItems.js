/* cspell:disable */
/* eslint-disable */
import { createDateFromLocalText } from "../utils/utils";

export function getMondayDummyContext() {
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


export function getDummyIdsList() {
  const res = {
    data: {
      boards: [
        {
          items_page: {

            items: [
              {
                id: "3323184903",
              },
              {
                id: "3339374630",
              },
            ],
          },
        },
      ],
    },
  };
  return res;
}

export function getMondayDummyBoardItems() {
  const res = {
  "data": {
    "items": [
      {
        "id": "3323184903",
        "name": "🎨Zen Zone World design improvements & Island Progression",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Done",
            "updated_at": "2026-11-17T10:31:50+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Done"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-01T20:33:27+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "xL",
            "updated_at": "2026-11-04T13:31:04+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "xL"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Zen Zone",
            "updated_at": "2026-11-01T20:33:29+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Zen Zone"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Vision",
            "updated_at": "2026-11-01T20:33:30+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Vision"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-02T09:22:41+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": [
          {
            "id": "3329642189",
            "name": "ZenZone Background new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-17T10:31:48+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:50:47+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329645898",
            "name": "Island 1 — DreamBloom environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T09:26:32+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:51+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329647397",
            "name": "Island state Locked",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-17T09:05:34+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "xS",
                "updated_at": "2026-11-04T08:53:10+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "xS"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329653976",
            "name": "Island 3 - autumn-inspired environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-12T13:15:11+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:57+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329656331",
            "name": "Island 2 — Ginko environment",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-11T13:00:06+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:58:55+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3329663751",
            "name": "bridges between islands",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-15T21:00:43+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-04T09:02:24+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T08:59:40+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330556853",
            "name": "Island 3 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:07+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:09+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:51+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330575413",
            "name": "Island 1 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:03+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:04+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:32+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          },
          {
            "id": "3330575750",
            "name": "Island 2 new",
            "parent_item": {
              "id": "3323184903",
              "name": "🎨Zen Zone World design improvements & Island Progression"
            },
            "column_values": [
              {
                "column": {
                  "id": "subtasks_mkrmtgvm",
                  "title": "Subitems"
                },
                "text": null
              },
              {
                "id": "color_mm5fb7mm",
                "label": "Done",
                "updated_at": "2026-11-10T08:59:05+00:00",
                "column": {
                  "id": "color_mm5fb7mm",
                  "title": "Planning Status"
                },
                "text": "Done"
              },
              {
                "id": "color_mm5fx8bd",
                "label": "Story",
                "updated_at": "2026-11-05T08:58:07+00:00",
                "column": {
                  "id": "color_mm5fx8bd",
                  "title": "Issue Type"
                },
                "text": "Story"
              },
              {
                "id": "color_mm5fnp1x",
                "label": "S",
                "updated_at": "2026-11-04T13:31:50+00:00",
                "column": {
                  "id": "color_mm5fnp1x",
                  "title": "Size Estimation"
                },
                "text": "S"
              },
              {
                "id": "color_mm5fj7av",
                "label": "Zen Zone",
                "updated_at": "2026-11-10T09:02:34+00:00",
                "column": {
                  "id": "color_mm5fj7av",
                  "title": "Domain"
                },
                "text": "Zen Zone"
              },
              {
                "id": "color_mm5fqavz",
                "label": "Vision",
                "updated_at": "2026-11-10T09:02:35+00:00",
                "column": {
                  "id": "color_mm5fqavz",
                  "title": "Strategic Category"
                },
                "text": "Vision"
              },
              {
                "id": "color_mm5k7m7a",
                "label": "Minimum",
                "updated_at": "2026-11-10T09:02:37+00:00",
                "column": {
                  "id": "color_mm5k7m7a",
                  "title": "Sprint Goal"
                },
                "text": "Minimum"
              },
              {
                "column": {
                  "id": "person",
                  "title": "Assigned"
                },
                "text": "Katerina sayko"
              }
            ],
            "subitems": []
          }
        ]
      },
      {
        "id": "3339374630",
        "name": "finish bomb mechanics design",
        "column_values": [
          {
            "column": {
              "id": "subtasks_mkrmtgvm",
              "title": "Subitems"
            },
            "text": null
          },
          {
            "id": "color_mm5fb7mm",
            "label": "Done",
            "updated_at": "2026-11-09T12:27:57+00:00",
            "column": {
              "id": "color_mm5fb7mm",
              "title": "Planning Status"
            },
            "text": "Done"
          },
          {
            "id": "color_mm5fx8bd",
            "label": "Feature",
            "updated_at": "2026-11-08T09:02:21+00:00",
            "column": {
              "id": "color_mm5fx8bd",
              "title": "Issue Type"
            },
            "text": "Feature"
          },
          {
            "id": "color_mm5fnp1x",
            "label": "xS",
            "updated_at": "2026-11-08T09:02:19+00:00",
            "column": {
              "id": "color_mm5fnp1x",
              "title": "Size Estimation"
            },
            "text": "xS"
          },
          {
            "id": "color_mm5fj7av",
            "label": "Brainstorm Match",
            "updated_at": "2026-11-08T09:03:20+00:00",
            "column": {
              "id": "color_mm5fj7av",
              "title": "Domain"
            },
            "text": "Brainstorm Match"
          },
          {
            "id": "color_mm5fqavz",
            "label": "Game Content",
            "updated_at": "2026-11-08T09:03:23+00:00",
            "column": {
              "id": "color_mm5fqavz",
              "title": "Strategic Category"
            },
            "text": "Game Content"
          },
          {
            "id": "color_mm5k7m7a",
            "label": "Minimum",
            "updated_at": "2026-11-08T09:03:45+00:00",
            "column": {
              "id": "color_mm5k7m7a",
              "title": "Sprint Goal"
            },
            "text": "Minimum"
          },
          {
            "column": {
              "id": "person",
              "title": "Assigned"
            },
            "text": "Katerina sayko"
          }
        ],
        "subitems": []
      }
    ]
  }
}



  return res;
}
