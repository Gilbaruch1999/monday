/* cspell:disable */
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
                id: "3274851488",
              },
              {
                id: "3274834528",
              },
              {
                id: "3274842651",
              },
              {
                id: "3260340084",
              },
              {
                id: "3260317538",
              },
              {
                id: "3260358408",
              },
              {
                id: "3260326053",
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
    data: {
      items: [
        {
          id: "3260317538",
          name: '🎨Design FTUE PvP Celebration - design (Part of "FTUE Stage 2–3 Learning Split")',
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-18T08:01:45+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-05T08:41:57+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "S",
              updated_at: "2026-10-07T08:00:00+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "S",
            },
            {
              id: "color_mm5fj7av",
              label: "Onboarding",
              updated_at: "2026-10-04T22:14:29+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Onboarding",
            },
            {
              id: "color_mm5fqavz",
              label: "User Needs",
              updated_at: "2026-10-04T22:14:38+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "User Needs",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-04T22:14:41+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Katerina sayko",
            },
          ],
          subitems: [],
        },
        {
          id: "3260326053",
          name: "🎨Daily Rewards - Design",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-22T20:17:49+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-04T21:44:41+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "S",
              updated_at: "2026-10-07T08:00:36+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "S",
            },
            {
              id: "color_mm5fj7av",
              label: "Lobby",
              updated_at: "2026-10-04T21:44:15+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Lobby",
            },
            {
              id: "color_mm5fqavz",
              label: "Monetization\\Data",
              updated_at: "2026-10-04T21:44:17+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "Monetization\\Data",
            },
            {
              id: "color_mm5k7m7a",
              label: "Target",
              updated_at: "2026-10-04T21:44:36+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Target",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Katerina sayko",
            },
          ],
          subitems: [],
        },
        {
          id: "3260340084",
          name: "Reduce Kaider Difficulty in FTUE Stage 2",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-18T10:42:15+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-04T22:38:18+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "No Effort",
              updated_at: "2026-10-07T20:54:41+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "No Effort",
            },
            {
              id: "color_mm5fj7av",
              label: "Onboarding",
              updated_at: "2026-10-04T22:38:14+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Onboarding",
            },
            {
              id: "color_mm5fqavz",
              label: "User Needs",
              updated_at: "2026-10-04T22:38:15+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "User Needs",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-04T22:38:12+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Asaf Bashari",
            },
          ],
          subitems: [],
        },
        {
          id: "3260358408",
          name: "🎨Zen Zone First Deisgn",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-20T09:58:45+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-04T23:39:14+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "L",
              updated_at: "2026-10-20T07:57:19+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "L",
            },
            {
              id: "color_mm5fj7av",
              label: "Zen Zone",
              updated_at: "2026-10-04T23:39:38+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Zen Zone",
            },
            {
              id: "color_mm5fqavz",
              label: "Game Content",
              updated_at: "2026-10-04T23:39:48+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "Game Content",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-04T23:39:49+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Katerina sayko",
            },
          ],
          subitems: [
            {
              id: "3266344341",
              name: "ZenZone Icon",
              parent_item: {
                id: "3260358408",
                name: "🎨Zen Zone First Deisgn",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-19T08:02:33+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-08T08:11:10+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-07T08:05:53+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Zen Zone",
                  updated_at: "2026-10-08T08:11:17+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Zen Zone",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-08T08:11:18+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-08T08:11:20+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3266338633",
              name: "5+ גביעיםicon",
              parent_item: {
                id: "3260358408",
                name: "🎨Zen Zone First Deisgn",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-20T09:58:42+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-08T08:11:10+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-07T08:07:44+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Zen Zone",
                  updated_at: "2026-10-08T08:11:17+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Zen Zone",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-08T08:11:18+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-08T08:11:20+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3266343372",
              name: "popup dreambloom",
              parent_item: {
                id: "3260358408",
                name: "🎨Zen Zone First Deisgn",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-20T08:00:15+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-08T08:11:10+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-07T08:08:46+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Zen Zone",
                  updated_at: "2026-10-08T08:11:17+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Zen Zone",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-08T08:11:18+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-08T08:11:20+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3266398158",
              name: "popup all done",
              parent_item: {
                id: "3260358408",
                name: "🎨Zen Zone First Deisgn",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-20T09:58:40+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-08T08:11:10+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-07T08:09:19+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Zen Zone",
                  updated_at: "2026-10-08T08:11:17+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Zen Zone",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-08T08:11:18+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-08T08:11:20+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3291654345",
              name: "Lobby Icon",
              parent_item: {
                id: "3260358408",
                name: "🎨Zen Zone First Deisgn",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-18T14:22:43+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-18T13:28:21+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-18T13:28:19+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Zen Zone",
                  updated_at: "2026-10-18T13:28:24+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Zen Zone",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-18T13:28:26+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-18T13:28:29+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
          ],
        },
        {
          id: "3274834528",
          name: "🎨Design Personal Growth Booster (Card, Icon & Animation)",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-15T07:28:05+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-11T07:48:11+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "M",
              updated_at: "2026-10-11T13:52:35+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "M",
            },
            {
              id: "color_mm5fj7av",
              label: "Brainstorm Match",
              updated_at: "2026-10-11T07:48:52+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Brainstorm Match",
            },
            {
              id: "color_mm5fqavz",
              label: "Game Content",
              updated_at: "2026-10-11T07:48:57+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "Game Content",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-11T07:48:46+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Katerina sayko",
            },
          ],
          subitems: [
            {
              id: "3275115196",
              name: "Personal Growth Booster Card",
              parent_item: {
                id: "3274834528",
                name: "🎨Design Personal Growth Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-14T07:30:39+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:52:25+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-11T13:52:40+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:52:59+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:09+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:18+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3275117576",
              name: "Personal Growth Booster Card Animation",
              parent_item: {
                id: "3274834528",
                name: "🎨Design Personal Growth Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-15T07:28:01+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:52:27+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-11T13:52:46+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:53:00+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:10+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:20+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3275114381",
              name: "Personal Growth Booster Logo",
              parent_item: {
                id: "3274834528",
                name: "🎨Design Personal Growth Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-15T07:28:03+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:52:32+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-11T13:52:48+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:53:02+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:12+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:22+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
          ],
        },
        {
          id: "3274842651",
          name: "Organize the development of both boosters.",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-15T19:31:40+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-11T07:47:46+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "M",
              updated_at: "2026-10-20T07:57:59+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "M",
            },
            {
              id: "color_mm5fj7av",
              label: "Brainstorm Match",
              updated_at: "2026-10-11T07:48:17+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Brainstorm Match",
            },
            {
              id: "color_mm5fqavz",
              label: "Game Content",
              updated_at: "2026-10-11T07:48:19+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "Game Content",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-11T07:48:42+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Asaf Bashari",
            },
          ],
          subitems: [
            {
              id: "3274842786",
              name: "Copycat Booster",
              parent_item: {
                id: "3274842651",
                name: "Organize the development of both boosters.",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-14T11:26:16+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-15T10:19:16+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "M",
                  updated_at: "2026-10-14T07:47:10+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "M",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T07:48:37+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T07:48:39+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T07:48:40+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Asaf Bashari",
                },
              ],
              subitems: [
                {
                  id: "3283117352",
                  name: "Implement graphics",
                  parent_item: {
                    id: "3274842786",
                    name: "Copycat Booster",
                  },
                  column_values: [
                    {
                      column: {
                        id: "subtasks_mkrmtgvm",
                        title: "Subitems",
                      },
                      text: null,
                    },
                    {
                      id: "color_mm5fb7mm",
                      label: "Done",
                      updated_at: "2026-10-14T10:29:16+00:00",
                      column: {
                        id: "color_mm5fb7mm",
                        title: "Planning Status",
                      },
                      text: "Done",
                    },
                    {
                      id: "color_mm5fx8bd",
                      label: "Task",
                      updated_at: "2026-10-15T10:19:18+00:00",
                      column: {
                        id: "color_mm5fx8bd",
                        title: "Issue Type",
                      },
                      text: "Task",
                    },
                    {
                      id: "color_mm5fnp1x",
                      label: "xS",
                      updated_at: "2026-10-14T07:47:02+00:00",
                      column: {
                        id: "color_mm5fnp1x",
                        title: "Size Estimation",
                      },
                      text: "xS",
                    },
                    {
                      id: "color_mm5fj7av",
                      label: "Where We At? 🕵️‍♂️",
                      updated_at: null,
                      column: {
                        id: "color_mm5fj7av",
                        title: "Domain",
                      },
                      text: "Where We At? 🕵️‍♂️",
                    },
                    {
                      id: "color_mm5fqavz",
                      label: "Why Though? 🤨",
                      updated_at: null,
                      column: {
                        id: "color_mm5fqavz",
                        title: "Strategic Category",
                      },
                      text: "Why Though? 🤨",
                    },
                    {
                      id: "color_mm5k7m7a",
                      label: "Not set",
                      updated_at: null,
                      column: {
                        id: "color_mm5k7m7a",
                        title: "Sprint Goal",
                      },
                      text: "Not set",
                    },
                    {
                      column: {
                        id: "person",
                        title: "Assigned",
                      },
                      text: "",
                    },
                  ],
                },
                {
                  id: "3283118461",
                  name: "Implement card copying effect",
                  parent_item: {
                    id: "3274842786",
                    name: "Copycat Booster",
                  },
                  column_values: [
                    {
                      column: {
                        id: "subtasks_mkrmtgvm",
                        title: "Subitems",
                      },
                      text: null,
                    },
                    {
                      id: "color_mm5fb7mm",
                      label: "Done",
                      updated_at: "2026-10-14T11:26:13+00:00",
                      column: {
                        id: "color_mm5fb7mm",
                        title: "Planning Status",
                      },
                      text: "Done",
                    },
                    {
                      id: "color_mm5fx8bd",
                      label: "Task",
                      updated_at: "2026-10-15T10:19:19+00:00",
                      column: {
                        id: "color_mm5fx8bd",
                        title: "Issue Type",
                      },
                      text: "Story",
                    },
                    {
                      id: "color_mm5fnp1x",
                      label: "S",
                      updated_at: "2026-10-14T07:47:06+00:00",
                      column: {
                        id: "color_mm5fnp1x",
                        title: "Size Estimation",
                      },
                      text: "S",
                    },
                    {
                      id: "color_mm5fj7av",
                      label: "Where We At? 🕵️‍♂️",
                      updated_at: null,
                      column: {
                        id: "color_mm5fj7av",
                        title: "Domain",
                      },
                      text: "Where We At? 🕵️‍♂️",
                    },
                    {
                      id: "color_mm5fqavz",
                      label: "Why Though? 🤨",
                      updated_at: null,
                      column: {
                        id: "color_mm5fqavz",
                        title: "Strategic Category",
                      },
                      text: "Why Though? 🤨",
                    },
                    {
                      id: "color_mm5k7m7a",
                      label: "Not set",
                      updated_at: null,
                      column: {
                        id: "color_mm5k7m7a",
                        title: "Sprint Goal",
                      },
                      text: "Not set",
                    },
                    {
                      column: {
                        id: "person",
                        title: "Assigned",
                      },
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              id: "3274834895",
              name: "Personal Growth",
              parent_item: {
                id: "3274842651",
                name: "Organize the development of both boosters.",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-15T19:31:38+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-18T08:48:19+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-14T07:47:00+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T07:48:37+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T07:48:39+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T07:48:40+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Asaf Bashari",
                },
              ],
              subitems: [
                {
                  id: "3283113281",
                  name: "Implement graphics",
                  parent_item: {
                    id: "3274834895",
                    name: "Personal Growth",
                  },
                  column_values: [
                    {
                      column: {
                        id: "subtasks_mkrmtgvm",
                        title: "Subitems",
                      },
                      text: null,
                    },
                    {
                      id: "color_mm5fb7mm",
                      label: "Done",
                      updated_at: "2026-10-15T19:31:37+00:00",
                      column: {
                        id: "color_mm5fb7mm",
                        title: "Planning Status",
                      },
                      text: "Done",
                    },
                    {
                      id: "color_mm5fx8bd",
                      label: "Story",
                      updated_at: "2026-10-18T08:48:28+00:00",
                      column: {
                        id: "color_mm5fx8bd",
                        title: "Issue Type",
                      },
                      text: "Story",
                    },
                    {
                      id: "color_mm5fnp1x",
                      label: "xS",
                      updated_at: "2026-10-14T07:46:56+00:00",
                      column: {
                        id: "color_mm5fnp1x",
                        title: "Size Estimation",
                      },
                      text: "xS",
                    },
                    {
                      id: "color_mm5fj7av",
                      label: "Where We At? 🕵️‍♂️",
                      updated_at: null,
                      column: {
                        id: "color_mm5fj7av",
                        title: "Domain",
                      },
                      text: "Where We At? 🕵️‍♂️",
                    },
                    {
                      id: "color_mm5fqavz",
                      label: "Why Though? 🤨",
                      updated_at: null,
                      column: {
                        id: "color_mm5fqavz",
                        title: "Strategic Category",
                      },
                      text: "Why Though? 🤨",
                    },
                    {
                      id: "color_mm5k7m7a",
                      label: "Not set",
                      updated_at: null,
                      column: {
                        id: "color_mm5k7m7a",
                        title: "Sprint Goal",
                      },
                      text: "Not set",
                    },
                    {
                      column: {
                        id: "person",
                        title: "Assigned",
                      },
                      text: "",
                    },
                  ],
                },
                {
                  id: "3283115635",
                  name: "implement upgrade effect",
                  parent_item: {
                    id: "3274834895",
                    name: "Personal Growth",
                  },
                  column_values: [
                    {
                      column: {
                        id: "subtasks_mkrmtgvm",
                        title: "Subitems",
                      },
                      text: null,
                    },
                    {
                      id: "color_mm5fb7mm",
                      label: "Done",
                      updated_at: "2026-10-15T19:31:35+00:00",
                      column: {
                        id: "color_mm5fb7mm",
                        title: "Planning Status",
                      },
                      text: "Done",
                    },
                    {
                      id: "color_mm5fx8bd",
                      label: "Story",
                      updated_at: "2026-10-18T08:48:31+00:00",
                      column: {
                        id: "color_mm5fx8bd",
                        title: "Issue Type",
                      },
                      text: "Story",
                    },
                    {
                      id: "color_mm5fnp1x",
                      label: "xS",
                      updated_at: "2026-10-14T07:46:58+00:00",
                      column: {
                        id: "color_mm5fnp1x",
                        title: "Size Estimation",
                      },
                      text: "xS",
                    },
                    {
                      id: "color_mm5fj7av",
                      label: "Where We At? 🕵️‍♂️",
                      updated_at: null,
                      column: {
                        id: "color_mm5fj7av",
                        title: "Domain",
                      },
                      text: "Where We At? 🕵️‍♂️",
                    },
                    {
                      id: "color_mm5fqavz",
                      label: "Why Though? 🤨",
                      updated_at: null,
                      column: {
                        id: "color_mm5fqavz",
                        title: "Strategic Category",
                      },
                      text: "Why Though? 🤨",
                    },
                    {
                      id: "color_mm5k7m7a",
                      label: "Not set",
                      updated_at: null,
                      column: {
                        id: "color_mm5k7m7a",
                        title: "Sprint Goal",
                      },
                      text: "Not set",
                    },
                    {
                      column: {
                        id: "person",
                        title: "Assigned",
                      },
                      text: "",
                    },
                  ],
                },
              ],
            },
            {
              id: "3283117352",
              name: "Implement graphics",
              parent_item: {
                id: "3274842786",
                name: "Copycat Booster",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-14T10:29:16+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Task",
                  updated_at: "2026-10-15T10:19:18+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-14T07:47:02+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Where We At? 🕵️‍♂️",
                  updated_at: null,
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Where We At? 🕵️‍♂️",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Why Though? 🤨",
                  updated_at: null,
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Why Though? 🤨",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Not set",
                  updated_at: null,
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Not set",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "",
                },
              ],
              subitems: [],
            },
            {
              id: "3283118461",
              name: "Implement card copying effect",
              parent_item: {
                id: "3274842786",
                name: "Copycat Booster",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-14T11:26:13+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Task",
                  updated_at: "2026-10-15T10:19:19+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-14T07:47:06+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Where We At? 🕵️‍♂️",
                  updated_at: null,
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Where We At? 🕵️‍♂️",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Why Though? 🤨",
                  updated_at: null,
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Why Though? 🤨",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Not set",
                  updated_at: null,
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Not set",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "",
                },
              ],
              subitems: [],
            },
            {
              id: "3283113281",
              name: "Implement graphics",
              parent_item: {
                id: "3274834895",
                name: "Personal Growth",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-15T19:31:37+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-18T08:48:28+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-14T07:46:56+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Where We At? 🕵️‍♂️",
                  updated_at: null,
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Where We At? 🕵️‍♂️",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Why Though? 🤨",
                  updated_at: null,
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Why Though? 🤨",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Not set",
                  updated_at: null,
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Not set",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "",
                },
              ],
              subitems: [],
            },
            {
              id: "3283115635",
              name: "implement upgrade effect",
              parent_item: {
                id: "3274834895",
                name: "Personal Growth",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-15T19:31:35+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Story",
                  updated_at: "2026-10-18T08:48:31+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Story",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-14T07:46:58+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Where We At? 🕵️‍♂️",
                  updated_at: null,
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Where We At? 🕵️‍♂️",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Why Though? 🤨",
                  updated_at: null,
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Why Though? 🤨",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Not set",
                  updated_at: null,
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Not set",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "",
                },
              ],
              subitems: [],
            },
          ],
        },
        {
          id: "3274851488",
          name: "🎨Design Copycat Booster (Card, Icon & Animation)",
          column_values: [
            {
              column: {
                id: "subtasks_mkrmtgvm",
                title: "Subitems",
              },
              text: null,
            },
            {
              id: "color_mm5fb7mm",
              label: "Done",
              updated_at: "2026-10-13T08:25:16+00:00",
              column: {
                id: "color_mm5fb7mm",
                title: "Planning Status",
              },
              text: "Done",
            },
            {
              id: "color_mm5fx8bd",
              label: "Feature",
              updated_at: "2026-10-11T07:48:13+00:00",
              column: {
                id: "color_mm5fx8bd",
                title: "Issue Type",
              },
              text: "Feature",
            },
            {
              id: "color_mm5fnp1x",
              label: "M",
              updated_at: "2026-10-11T13:51:23+00:00",
              column: {
                id: "color_mm5fnp1x",
                title: "Size Estimation",
              },
              text: "M",
            },
            {
              id: "color_mm5fj7av",
              label: "Brainstorm Match",
              updated_at: "2026-10-11T07:48:50+00:00",
              column: {
                id: "color_mm5fj7av",
                title: "Domain",
              },
              text: "Brainstorm Match",
            },
            {
              id: "color_mm5fqavz",
              label: "Game Content",
              updated_at: "2026-10-11T07:48:55+00:00",
              column: {
                id: "color_mm5fqavz",
                title: "Strategic Category",
              },
              text: "Game Content",
            },
            {
              id: "color_mm5k7m7a",
              label: "Minimum",
              updated_at: "2026-10-11T07:48:45+00:00",
              column: {
                id: "color_mm5k7m7a",
                title: "Sprint Goal",
              },
              text: "Minimum",
            },
            {
              column: {
                id: "person",
                title: "Assigned",
              },
              text: "Katerina sayko",
            },
          ],
          subitems: [
            {
              id: "3275163246",
              name: "Copycat Booster Card",
              parent_item: {
                id: "3274851488",
                name: "🎨Design Copycat Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-13T07:14:24+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:51:28+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-11T13:52:43+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:52:54+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:04+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:14+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3275174082",
              name: "Copycat Booster Card Animation",
              parent_item: {
                id: "3274851488",
                name: "🎨Design Copycat Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-13T07:36:58+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:51:29+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "S",
                  updated_at: "2026-10-11T13:51:19+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "S",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:52:55+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:05+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:15+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
            {
              id: "3275120501",
              name: "Copycat Booster Logo",
              parent_item: {
                id: "3274851488",
                name: "🎨Design Copycat Booster (Card, Icon & Animation)",
              },
              column_values: [
                {
                  column: {
                    id: "subtasks_mkrmtgvm",
                    title: "Subitems",
                  },
                  text: null,
                },
                {
                  id: "color_mm5fb7mm",
                  label: "Done",
                  updated_at: "2026-10-13T08:25:15+00:00",
                  column: {
                    id: "color_mm5fb7mm",
                    title: "Planning Status",
                  },
                  text: "Done",
                },
                {
                  id: "color_mm5fx8bd",
                  label: "Epic",
                  updated_at: "2026-10-11T13:51:31+00:00",
                  column: {
                    id: "color_mm5fx8bd",
                    title: "Issue Type",
                  },
                  text: "Epic",
                },
                {
                  id: "color_mm5fnp1x",
                  label: "xS",
                  updated_at: "2026-10-11T13:51:17+00:00",
                  column: {
                    id: "color_mm5fnp1x",
                    title: "Size Estimation",
                  },
                  text: "xS",
                },
                {
                  id: "color_mm5fj7av",
                  label: "Brainstorm Match",
                  updated_at: "2026-10-11T13:52:57+00:00",
                  column: {
                    id: "color_mm5fj7av",
                    title: "Domain",
                  },
                  text: "Brainstorm Match",
                },
                {
                  id: "color_mm5fqavz",
                  label: "Game Content",
                  updated_at: "2026-10-11T13:53:07+00:00",
                  column: {
                    id: "color_mm5fqavz",
                    title: "Strategic Category",
                  },
                  text: "Game Content",
                },
                {
                  id: "color_mm5k7m7a",
                  label: "Minimum",
                  updated_at: "2026-10-11T13:53:16+00:00",
                  column: {
                    id: "color_mm5k7m7a",
                    title: "Sprint Goal",
                  },
                  text: "Minimum",
                },
                {
                  column: {
                    id: "person",
                    title: "Assigned",
                  },
                  text: "Katerina sayko",
                },
              ],
              subitems: [],
            },
          ],
        },
      ],
    },
  };

  return res;
}
