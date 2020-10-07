// Bring context
let ctx = document.getElementById('myChart1').getContext('2d');
// Generate chart
// Hand ctx in as argument
var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: '빈도 26',
			borderColor: 'rgb(255,103,135)', // From next: -8, +5, +4
			backgroundColor: 'rgb(255,103,135,0.5)', // -From next: -8, +5, +4
            data: [{x:33,y:40}]
        }, {
			label: '빈도 25',
			borderColor: 'rgb(247,108,139)',
			backgroundColor: 'rgb(247,108,139,0.5)',
			data: [{x:31, y:34}]
		}, {
			label: '빈도 24',
			borderColor: 'rgb(239,113,143)',
			backgroundColor: 'rgb(239,113,143,0.5)',
			data: [{x:12,y:24},
				{x:8,y:39},
				{x:10,y:31},
				{x:11,y:21}]
		}, {
			label: '빈도 23',
			borderColor: 'rgb(231,118,147)',
			backgroundColor: 'rgb(231,118,147,0.5)',
			data: [{x:34,y:44},
				{x:3,y:20},
				{x:8,y:27},
				{x:4,y:20},
				{x:5,y:34},
				{x:27,y:40}]
		}, {
			label: '빈도 22',
			borderColor: 'rgb(223,123,151)',
			backgroundColor: 'rgb(223,123,151,0.5)',
			data: [{x:34,y:42},
				{x:24,y:27},
				{x:1,y:3},
				{x:3,y:13},
				{x:14,y:26},
				{x:14,y:15},
				{x:15,y:34},
				{x:18,y:31},
				{x:5,y:14},
				{x:17,y:45}]
		}, {
			label: '빈도 21',
			borderColor: 'rgb(215,128,155)',
			backgroundColor: 'rgb(215,128,155,0.5)',
			data:[{x:29,y:44},
				{x:30,y:34},
				{x:20,y:35},
				{x:1,y:28},
				{x:25,y:36},
				{x:7,y:18},
				{x:3,y:12},
				{x:8,y:21},
				{x:11,y:26},
				{x:26,y:43},
				{x:12,y:15},
				{x:5,y:20},
				{x:5,y:27},
				{x:12,y:34},
				{x:18,y:34}]
		}, {
			label: '빈도 20',
			borderColor: 'rgb(207,133,159)',
			backgroundColor: 'rgb(207,133,159,0.5)',
			data:[{x:22,y:37},
				{x:3,y:32},
				{x:14,y:32},
				{x:29,y:33},
				{x:14,y:30},
				{x:18,y:23},
				{x:16,y:41},
				{x:35,y:43},
				{x:6,y:38},
				{x:6,y:37},
				{x:17,y:36},
				{x:1,y:42},
				{x:2,y:25},
				{x:3,y:24},
				{x:7,y:20},
				{x:3,y:27},
				{x:8,y:18},
				{x:18,y:26},
				{x:26,y:27},
				{x:15,y:21},
				{x:17,y:31},
				{x:18,y:21},
				{x:21,y:34},
				{x:11,y:39},
				{x:4,y:10},
				{x:4,y:33},
				{x:4,y:40},
				{x:37,y:40},
				{x:17,y:19},
				{x:19,y:43},
				{x:19,y:34},
				{x:1,y:12},
				{x:20,y:33},
				{x:13,y:33},
				{x:34,y:45},
				{x:13,y:39}]
		}, {
			label: '빈도 19',
			borderColor: 'rgb(199,138,163)',
			backgroundColor: 'rgb(199,138,163,0.5)',
			data:[{x:18,y:32},
				{x:7,y:29},
				{x:39,y:41},
				{x:27,y:35},
				{x:6,y:28},
				{x:14,y:36},
				{x:36,y:39},
				{x:19,y:42},
				{x:42,y:45},
				{x:12,y:42},
				{x:19,y:25},
				{x:2,y:8},
				{x:1,y:2},
				{x:2,y:17},
				{x:2,y:34},
				{x:7,y:24},
				{x:7,y:38},
				{x:7,y:33},
				{x:7,y:40},
				{x:11,y:44},
				{x:17,y:44},
				{x:8,y:38},
				{x:8,y:45},
				{x:8,y:43},
				{x:38,y:40},
				{x:4,y:26},
				{x:15,y:43},
				{x:31,y:40},
				{x:19,y:21},
				{x:14,y:21},
				{x:5,y:11},
				{x:4,y:27},
				{x:37,y:45},
				{x:13,y:37},
				{x:37,y:43},
				{x:1,y:10},
				{x:10,y:40},
				{x:10,y:18},
				{x:5,y:13},
				{x:19,y:45},
				{x:1,y:17},
				{x:1,y:34},
				{x:14,y:39},
				{x:18,y:39},
				{x:27,y:43}]
		}, {
			label: '빈도 18',
			borderColor: 'rgb(191,143,167)',
			backgroundColor: 'rgb(191,143,167,0.5)',
			data:[{x:9,y:12},
				{x:13,y:32},
				{x:1,y:29},
				{x:30,y:38},
				{x:30,y:45},
				{x:30,y:43},
				{x:15,y:23},
				{x:20,y:23},
				{x:41,y:45},
				{x:40,y:41},
				{x:35,y:40},
				{x:11,y:28},
				{x:13,y:28},
				{x:5,y:6},
				{x:6,y:13},
				{x:26,y:36},
				{x:21,y:36},
				{x:33,y:36},
				{x:16,y:38},
				{x:4,y:16},
				{x:10,y:16},
				{x:16,y:40},
				{x:18,y:42},
				{x:15,y:25},
				{x:25,y:33},
				{x:2,y:15},
				{x:2,y:11},
				{x:2,y:19},
				{x:2,y:33},
				{x:24,y:44},
				{x:20,y:24},
				{x:7,y:15},
				{x:7,y:19},
				{x:7,y:12},
				{x:10,y:44},
				{x:3,y:10},
				{x:8,y:19},
				{x:1,y:8},
				{x:8,y:13},
				{x:8,y:17},
				{x:31,y:38},
				{x:37,y:38},
				{x:38,y:45},
				{x:21,y:26},
				{x:26,y:40},
				{x:15,y:19},
				{x:14,y:31},
				{x:11,y:37},
				{x:10,y:19},
				{x:5,y:39},
				{x:1,y:40},
				{x:12,y:33},
				{x:17,y:20},
				{x:14,y:45},
				{x:18,y:45},
				{x:13,y:43},
				{x:40,y:43},
				{x:12,y:43},
				{x:39,y:43}]
		}, {
			label: '빈도 17',
			borderColor: 'rgb(183,148,171)',
			backgroundColor: 'rgb(183,148,171,0.5)',
			data:[{x:22,y:36},
				{x:10,y:22},
				{x:31,y:32},
				{x:32,y:33},
				{x:12,y:32},
				{x:23,y:44},
				{x:23,y:43},
				{x:41,y:44},
				{x:33,y:35},
				{x:2,y:28},
				{x:28,y:40},
				{x:28,y:43},
				{x:6,y:16},
				{x:2,y:6},
				{x:6,y:17},
				{x:7,y:36},
				{x:8,y:36},
				{x:20,y:36},
				{x:16,y:25},
				{x:3,y:42},
				{x:15,y:42},
				{x:5,y:42},
				{x:42,y:43},
				{x:4,y:25},
				{x:13,y:25},
				{x:25,y:43},
				{x:2,y:45},
				{x:2,y:27},
				{x:24,y:33},
				{x:24,y:40},
				{x:24,y:34},
				{x:8,y:44},
				{x:20,y:44},
				{x:3,y:31},
				{x:3,y:11},
				{x:8,y:31},
				{x:8,y:33},
				{x:13,y:38},
				{x:12,y:38},
				{x:18,y:38},
				{x:34,y:38},
				{x:1,y:26},
				{x:12,y:26},
				{x:11,y:13},
				{x:11,y:14},
				{x:11,y:17},
				{x:4,y:5},
				{x:4,y:34},
				{x:14,y:37},
				{x:5,y:45},
				{x:5,y:18},
				{x:5,y:43},
				{x:1,y:20},
				{x:1,y:27},
				{x:14,y:18},
				{x:12,y:39},
				{x:17,y:39},
				{x:27,y:39},
				{x:34,y:39},
				{x:17,y:18},
				{x:17,y:27},
				{x:17,y:34},]
		}, {
			label: '빈도 16',
			borderColor: 'rgb(175,153,175)',
			backgroundColor: 'rgb(175,153,175,0.5)',
			data:[{x:5,y:22},
				{x:14,y:22},
				{x:22,y:34},
				{x:10,y:32},
				{x:32,y:40},
				{x:16,y:29},
				{x:29,y:38},
				{x:12,y:29},
				{x:27,y:29},
				{x:29,y:43},
				{x:29,y:34},
				{x:28,y:30},
				{x:24,y:30},
				{x:20,y:30},
				{x:30,y:39},
				{x:18,y:30},
				{x:1,y:23},
				{x:23,y:45},
				{x:19,y:41},
				{x:33,y:41},
				{x:41,y:43},
				{x:35,y:37},
				{x:10,y:35},
				{x:17,y:35},
				{x:34,y:35},
				{x:19,y:28},
				{x:6,y:7},
				{x:6,y:31},
				{x:6,y:21},
				{x:6,y:11},
				{x:6,y:10},
				{x:6,y:40},
				{x:6,y:18},
				{x:36,y:45},
				{x:2,y:16},
				{x:16,y:26},
				{x:1,y:16},
				{x:16,y:43},
				{x:27,y:42},
				{x:2,y:4},
				{x:11,y:24},
				{x:10,y:24},
				{x:19,y:24},
				{x:1,y:24},
				{x:7,y:39},
				{x:3,y:44},
				{x:31,y:44},
				{x:33,y:44},
				{x:39,y:44},
				{x:27,y:44},
				{x:43,y:44},
				{x:3,y:4},
				{x:3,y:14},
				{x:3,y:43},
				{x:10,y:38},
				{x:14,y:38},
				{x:38,y:39},
				{x:15,y:26},
				{x:20,y:26},
				{x:13,y:26},
				{x:11,y:15},
				{x:15,y:20},
				{x:21,y:31},
				{x:27,y:31},
				{x:31,y:43},
				{x:5,y:21},
				{x:21,y:39},
				{x:21,y:27},
				{x:21,y:43},
				{x:11,y:12},
				{x:11,y:18},
				{x:4,y:37},
				{x:4,y:19},
				{x:4,y:18},
				{x:4,y:17},
				{x:10,y:37},
				{x:1,y:37},
				{x:33,y:37},
				{x:18,y:37},
				{x:27,y:37},
				{x:10,y:13},
				{x:10,y:14},
				{x:5,y:12},
				{x:19,y:20},
				{x:12,y:19},
				{x:1,y:18},
				{x:17,y:33},
				{x:20,y:27},
				{x:20,y:43},
				{x:39,y:45},
				{x:43,y:45},
				{x:13,y:14},
				{x:13,y:18},
				{x:13,y:34},
				{x:14,y:40},
				{x:14,y:27},
				{x:14,y:43},
				{x:12,y:40},
				{x:18,y:43},
				{x:34,y:43}]
		}, {
			label: '빈도 15',
			borderColor: 'rgb(167,158,179)',
			backgroundColor: 'rgb(167,158,179,0.5)',
			data:[{x:5,y:9},
				{x:6,y:22},
				{x:15,y:22},
				{x:22,y:31},
				{x:4,y:32},
				{x:32,y:45},
				{x:25,y:29},
				{x:29,y:39},
				{x:8,y:30},
				{x:5,y:30},
				{x:30,y:33},
				{x:17,y:30},
				{x:27,y:30},
				{x:23,y:35},
				{x:23,y:42},
				{x:4,y:23},
				{x:19,y:23},
				{x:36,y:41},
				{x:7,y:41},
				{x:1,y:41},
				{x:13,y:41},
				{x:12,y:41},
				{x:34,y:41},
				{x:1,y:35},
				{x:35,y:39},
				{x:28,y:42},
				{x:4,y:28},
				{x:28,y:37},
				{x:28,y:45},
				{x:12,y:28},
				{x:17,y:28},
				{x:28,y:34},
				{x:6,y:12},
				{x:6,y:34},
				{x:16,y:36},
				{x:24,y:36},
				{x:10,y:36},
				{x:27,y:36},
				{x:16,y:24},
				{x:7,y:16},
				{x:16,y:31},
				{x:16,y:19},
				{x:16,y:20},
				{x:16,y:45},
				{x:16,y:17},
				{x:16,y:34},
				{x:7,y:42},
				{x:33,y:42},
				{x:21,y:25},
				{x:25,y:37},
				{x:5,y:25},
				{x:25,y:45},
				{x:25,y:34},
				{x:2,y:20},
				{x:2,y:12},
				{x:24,y:39},
				{x:17,y:24},
				{x:3,y:7},
				{x:26,y:44},
				{x:19,y:44},
				{x:12,y:44},
				{x:3,y:8},
				{x:3,y:37},
				{x:3,y:34},
				{x:8,y:34},
				{x:11,y:38},
				{x:33,y:38},
				{x:38,y:43},
				{x:5,y:26},
				{x:26,y:34},
				{x:10,y:15},
				{x:13,y:15},
				{x:11,y:31},
				{x:19,y:31},
				{x:21,y:37},
				{x:21,y:45},
				{x:17,y:21},
				{x:4,y:11},
				{x:1,y:11},
				{x:4,y:45},
				{x:4,y:43},
				{x:17,y:37},
				{x:10,y:27},
				{x:10,y:34},
				{x:1,y:5},
				{x:5,y:17},
				{x:19,y:39},
				{x:33,y:45},
				{x:14,y:33},
				{x:33,y:34},
				{x:13,y:20},
				{x:20,y:40},
				{x:12,y:20},
				{x:18,y:20},
				{x:13,y:45},
				{x:12,y:45},
				{x:27,y:45},
				{x:13,y:40},
				{x:12,y:13},
				{x:12,y:14},
				{x:14,y:17},
				{x:17,y:40},
				{x:12,y:18},
				{x:18,y:27},
				{x:17,y:43}]
		}, {
			label: '빈도 14',
			borderColor: 'rgb(159,163,183)',
			backgroundColor: 'rgb(159,163,183,0.5)',
			data:[{x:4,y:9},
				{x:1,y:9},
				{x:9,y:33},
				{x:9,y:39},
				{x:9,y:17},
				{x:9,y:43},
				{x:22,y:25},
				{x:7,y:22},
				{x:22,y:44},
				{x:3,y:22},
				{x:22,y:38},
				{x:21,y:22},
				{x:24,y:32},
				{x:11,y:32},
				{x:5,y:32},
				{x:17,y:32},
				{x:32,y:34},
				{x:26,y:29},
				{x:5,y:29},
				{x:13,y:29},
				{x:29,y:40},
				{x:30,y:42},
				{x:23,y:28},
				{x:23,y:25},
				{x:7,y:23},
				{x:14,y:23},
				{x:23,y:39},
				{x:23,y:34},
				{x:3,y:41},
				{x:15,y:41},
				{x:21,y:41},
				{x:4,y:41},
				{x:37,y:41},
				{x:10,y:41},
				{x:8,y:35},
				{x:15,y:35},
				{x:14,y:35},
				{x:26,y:28},
				{x:15,y:28},
				{x:28,y:39},
				{x:27,y:28},
				{x:6,y:19},
				{x:6,y:14},
				{x:6,y:39},
				{x:36,y:44},
				{x:11,y:36},
				{x:36,y:37},
				{x:34,y:36},
				{x:16,y:42},
				{x:3,y:16},
				{x:5,y:16},
				{x:2,y:42},
				{x:24,y:42},
				{x:26,y:42},
				{x:25,y:44},
				{x:8,y:25},
				{x:25,y:38},
				{x:2,y:7},
				{x:2,y:44},
				{x:2,y:3},
				{x:2,y:43},
				{x:15,y:24},
				{x:24,y:45},
				{x:18,y:24},
				{x:7,y:8},
				{x:7,y:37},
				{x:7,y:45},
				{x:7,y:43},
				{x:7,y:34},
				{x:15,y:44},
				{x:21,y:44},
				{x:5,y:44},
				{x:3,y:38},
				{x:3,y:45},
				{x:8,y:15},
				{x:4,y:8},
				{x:8,y:14},
				{x:27,y:38},
				{x:26,y:31},
				{x:19,y:26},
				{x:15,y:45},
				{x:15,y:17},
				{x:4,y:31},
				{x:31,y:37},
				{x:31,y:33},
				{x:20,y:31},
				{x:1,y:21},
				{x:10,y:11},
				{x:11,y:45},
				{x:1,y:4},
				{x:4,y:14},
				{x:20,y:37},
				{x:37,y:39},
				{x:10,y:20},
				{x:14,y:19},
				{x:19,y:27},
				{x:1,y:45},
				{x:1,y:13},
				{x:14,y:20},
				{x:20,y:39},
				{x:20,y:34},
				{x:13,y:17},
				{x:13,y:27},
				{x:18,y:40},
				{x:12,y:27},
				{x:27,y:34}]
		}, {
			label: '빈도 13',
			borderColor: 'rgb(151,168,187)',
			backgroundColor: 'rgb(151,168,187,0.5)',
			data:[{x:9,y:28},
				{x:9,y:25},
				{x:22,y:28},
				{x:22,y:42},
				{x:19,y:22},
				{x:22,y:40},
				{x:32,y:42},
				{x:21,y:32},
				{x:32,y:37},
				{x:23,y:29},
				{x:24,y:29},
				{x:8,y:29},
				{x:11,y:29},
				{x:4,y:29},
				{x:10,y:29},
				{x:18,y:29},
				{x:30,y:41},
				{x:30,y:35},
				{x:26,y:30},
				{x:19,y:30},
				{x:12,y:30},
				{x:16,y:23},
				{x:3,y:23},
				{x:8,y:23},
				{x:23,y:38},
				{x:5,y:23},
				{x:12,y:23},
				{x:17,y:23},
				{x:11,y:41},
				{x:27,y:41},
				{x:25,y:35},
				{x:24,y:35},
				{x:35,y:44},
				{x:26,y:35},
				{x:21,y:35},
				{x:11,y:35},
				{x:19,y:35},
				{x:35,y:45},
				{x:16,y:28},
				{x:25,y:28},
				{x:28,y:44},
				{x:28,y:38},
				{x:10,y:28},
				{x:6,y:25},
				{x:6,y:26},
				{x:4,y:6},
				{x:6,y:20},
				{x:6,y:43},
				{x:3,y:36},
				{x:13,y:36},
				{x:16,y:44},
				{x:16,y:37},
				{x:16,y:33},
				{x:16,y:39},
				{x:8,y:42},
				{x:4,y:42},
				{x:10,y:42},
				{x:13,y:42},
				{x:14,y:42},
				{x:40,y:42},
				{x:17,y:42},
				{x:7,y:25},
				{x:25,y:26},
				{x:10,y:25},
				{x:20,y:25},
				{x:14,y:25},
				{x:25,y:40},
				{x:25,y:39},
				{x:17,y:25},
				{x:2,y:24},
				{x:2,y:26},
				{x:2,y:31},
				{x:2,y:37},
				{x:2,y:39},
				{x:24,y:38},
				{x:13,y:24},
				{x:7,y:31},
				{x:7,y:13},
				{x:7,y:27},
				{x:38,y:44},
				{x:14,y:44},
				{x:18,y:44},
				{x:3,y:17},
				{x:8,y:37},
				{x:26,y:37},
				{x:26,y:39},
				{x:17,y:26},
				{x:15,y:37},
				{x:1,y:15},
				{x:15,y:39},
				{x:5,y:31},
				{x:31,y:45},
				{x:13,y:31},
				{x:12,y:31},
				{x:12,y:21},
				{x:11,y:33},
				{x:11,y:27},
				{x:11,y:43},
				{x:4,y:13},
				{x:10,y:33},
				{x:10,y:39},
				{x:10,y:43},
				{x:5,y:19},
				{x:19,y:40},
				{x:18,y:19},
				{x:1,y:14},
				{x:1,y:43},
				{x:33,y:39},
				{x:34,y:40}]
		}, {
			label: '빈도 12',
			borderColor: 'rgb(143,173,191)',
			backgroundColor: 'rgb(143,173,191,0.5)',
			data:[{x:7,y:9},
				{x:9,y:38},
				{x:9,y:21},
				{x:9,y:27},
				{x:9,y:34},
				{x:22,y:35},
				{x:2,y:22},
				{x:22,y:24},
				{x:13,y:22},
				{x:22,y:39},
				{x:29,y:32},
				{x:6,y:32},
				{x:32,y:36},
				{x:8,y:32},
				{x:19,y:32},
				{x:1,y:32},
				{x:29,y:35},
				{x:21,y:29},
				{x:29,y:37},
				{x:17,y:29},
				{x:6,y:30},
				{x:16,y:30},
				{x:7,y:30},
				{x:3,y:30},
				{x:21,y:30},
				{x:30,y:37},
				{x:11,y:23},
				{x:23,y:40},
				{x:23,y:27},
				{x:6,y:41},
				{x:41,y:42},
				{x:24,y:41},
				{x:5,y:41},
				{x:20,y:41},
				{x:17,y:41},
				{x:6,y:35},
				{x:28,y:36},
				{x:20,y:28},
				{x:14,y:28},
				{x:6,y:24},
				{x:6,y:44},
				{x:6,y:15},
				{x:36,y:42},
				{x:36,y:38},
				{x:31,y:36},
				{x:19,y:36},
				{x:1,y:36},
				{x:36,y:40},
				{x:12,y:36},
				{x:18,y:36},
				{x:16,y:21},
				{x:11,y:16},
				{x:12,y:16},
				{x:16,y:18},
				{x:16,y:27},
				{x:38,y:42},
				{x:24,y:25},
				{x:25,y:31},
				{x:12,y:25},
				{x:25,y:27},
				{x:2,y:5},
				{x:24,y:37},
				{x:7,y:26},
				{x:5,y:7},
				{x:7,y:17},
				{x:40,y:44},
				{x:3,y:33},
				{x:3,y:40},
				{x:3,y:39},
				{x:26,y:38},
				{x:21,y:38},
				{x:19,y:38},
				{x:20,y:38},
				{x:26,y:33},
				{x:4,y:15},
				{x:15,y:40},
				{x:15,y:18},
				{x:15,y:27},
				{x:31,y:39},
				{x:21,y:33},
				{x:13,y:21},
				{x:21,y:40},
				{x:11,y:19},
				{x:4,y:12},
				{x:5,y:37},
				{x:10,y:12},
				{x:1,y:19},
				{x:27,y:33},
				{x:33,y:43},
				{x:40,y:45},
				{x:39,y:40}]
		}, {
			label: '빈도 11',
			borderColor: 'rgb(135,178,195)',
			backgroundColor: 'rgb(135,178,195,0.5)',
			data:[{x:9,y:32},
				{x:9,y:29},
				{x:9,y:23},
				{x:9,y:41},
				{x:9,y:26},
				{x:9,y:31},
				{x:9,y:10},
				{x:9,y:13},
				{x:9,y:40},
				{x:11,y:22},
				{x:22,y:33},
				{x:17,y:22},
				{x:22,y:27},
				{x:22,y:43},
				{x:25,y:32},
				{x:27,y:32},
				{x:32,y:43},
				{x:29,y:42},
				{x:2,y:29},
				{x:29,y:31},
				{x:30,y:36},
				{x:2,y:30},
				{x:30,y:44},
				{x:23,y:36},
				{x:23,y:24},
				{x:23,y:26},
				{x:21,y:23},
				{x:23,y:37},
				{x:10,y:23},
				{x:2,y:41},
				{x:8,y:41},
				{x:38,y:41},
				{x:26,y:41},
				{x:28,y:35},
				{x:35,y:36},
				{x:35,y:42},
				{x:31,y:35},
				{x:5,y:35},
				{x:13,y:35},
				{x:7,y:28},
				{x:8,y:28},
				{x:5,y:28},
				{x:18,y:28},
				{x:6,y:8},
				{x:6,y:27},
				{x:15,y:36},
				{x:5,y:36},
				{x:36,y:43},
				{x:42,y:44},
				{x:21,y:42},
				{x:37,y:42},
				{x:20,y:42},
				{x:1,y:25},
				{x:18,y:25},
				{x:2,y:21},
				{x:2,y:13},
				{x:2,y:14},
				{x:2,y:40},
				{x:2,y:18},
				{x:24,y:26},
				{x:24,y:31},
				{x:21,y:24},
				{x:7,y:44},
				{x:7,y:11},
				{x:7,y:10},
				{x:8,y:11},
				{x:5,y:8},
				{x:17,y:38},
				{x:10,y:26},
				{x:26,y:45},
				{x:5,y:15},
				{x:4,y:21},
				{x:10,y:21},
				{x:4,y:39},
				{x:34,y:37},
				{x:13,y:19},
				{x:1,y:33},
				{x:1,y:39},
				{x:18,y:33},
				{x:20,y:45},
				{x:12,y:17}]
		}, {
			label: '빈도 10',
			borderColor: 'rgb(127,183,199)',
			backgroundColor: 'rgb(127,183,199,0.5)',
			data:[{x:9,y:36},
				{x:9,y:16},
				{x:9,y:24},
				{x:9,y:15},
				{x:9,y:11},
				{x:9,y:37},
				{x:9,y:14},
				{x:9,y:18},
				{x:22,y:32},
				{x:22,y:23},
				{x:4,y:22},
				{x:20,y:22},
				{x:18,y:22},
				{x:32,y:41},
				{x:2,y:32},
				{x:32,y:44},
				{x:20,y:32},
				{x:32,y:39},
				{x:29,y:41},
				{x:29,y:36},
				{x:3,y:29},
				{x:23,y:30},
				{x:15,y:30},
				{x:30,y:31},
				{x:11,y:30},
				{x:30,y:40},
				{x:13,y:23},
				{x:35,y:41},
				{x:28,y:41},
				{x:18,y:41},
				{x:16,y:35},
				{x:7,y:35},
				{x:3,y:35},
				{x:35,y:38},
				{x:4,y:35},
				{x:18,y:35},
				{x:1,y:6},
				{x:6,y:45},
				{x:2,y:36},
				{x:15,y:16},
				{x:14,y:16},
				{x:25,y:42},
				{x:31,y:42},
				{x:11,y:42},
				{x:39,y:42},
				{x:2,y:38},
				{x:8,y:24},
				{x:4,y:24},
				{x:5,y:24},
				{x:1,y:7},
				{x:1,y:44},
				{x:3,y:26},
				{x:3,y:15},
				{x:3,y:5},
				{x:3,y:19},
				{x:3,y:18},
				{x:8,y:10},
				{x:8,y:20},
				{x:15,y:38},
				{x:4,y:38},
				{x:5,y:38},
				{x:1,y:38},
				{x:15,y:31},
				{x:15,y:33},
				{x:12,y:37},
				{x:5,y:10},
				{x:10,y:17},
				{x:5,y:33},
				{x:14,y:34}]
		}, {
			label: '빈도 09',
			borderColor: 'rgb(119,188,203)',
			backgroundColor: 'rgb(119,188,203,0.5)',
			data:[{x:9,y:35},
				{x:6,y:9},
				{x:9,y:42},
				{x:2,y:9},
				{x:16,y:22},
				{x:8,y:22},
				{x:22,y:26},
				{x:32,y:35},
				{x:28,y:32},
				{x:15,y:32},
				{x:15,y:29},
				{x:20,y:29},
				{x:14,y:29},
				{x:10,y:30},
				{x:13,y:30},
				{x:2,y:23},
				{x:23,y:31},
				{x:25,y:41},
				{x:12,y:35},
				{x:28,y:33},
				{x:13,y:16},
				{x:11,y:25},
				{x:2,y:10},
				{x:14,y:24},
				{x:4,y:7},
				{x:7,y:14},
				{x:4,y:44},
				{x:44,y:45},
				{x:13,y:44},
				{x:3,y:21},
				{x:8,y:40},
				{x:20,y:21},
				{x:11,y:34},
				{x:19,y:37},
				{x:10,y:45},
				{x:19,y:33}]
		}, {
			label: '빈도 08',
			borderColor: 'rgb(111,193,207)',
			backgroundColor: 'rgb(111,193,207,0.5)',
			data:[{x:9,y:30},
				{x:3,y:9},
				{x:9,y:19},
				{x:22,y:30},
				{x:1,y:22},
				{x:22,y:45},
				{x:12,y:22},
				{x:29,y:30},
				{x:28,y:29},
				{x:25,y:30},
				{x:23,y:41},
				{x:23,y:33},
				{x:2,y:35},
				{x:24,y:28},
				{x:6,y:36},
				{x:8,y:16},
				{x:3,y:25},
				{x:7,y:21},
				{x:1,y:31},
				{x:11,y:20},
				{x:5,y:40}]
		}, {
			label: '빈도 07',
			borderColor: 'rgb(103,198,211)',
			backgroundColor: 'rgb(103,198,211,0.5)',
			data:[{x:9,y:44},
				{x:9,y:20},
				{x:9,y:45},
				{x:22,y:29},
				{x:30,y:32},
				{x:23,y:32},
				{x:7,y:32},
				{x:32,y:38},
				{x:19,y:29},
				{x:29,y:45},
				{x:4,y:30},
				{x:1,y:30},
				{x:14,y:41},
				{x:28,y:31},
				{x:21,y:28},
				{x:3,y:6},
				{x:6,y:33},
				{x:4,y:36},
				{x:24,y:43}]
		}, {
			label: '빈도 06',
			borderColor: 'rgb(95,203,215)',
			backgroundColor: 'rgb(95,203,215,0.5)',
			data:[{x:9,y:22},
				{x:8,y:9},
				{x:16,y:32},
				{x:6,y:29},
				{x:6,y:23},
				{x:31,y:41},
				{x:3,y:28},
				{x:6,y:42},
				{x:37,y:44},
				{x:8,y:26},
				{x:11,y:40}]
		}]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});