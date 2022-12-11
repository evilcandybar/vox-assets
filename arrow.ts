export const ARROW = {
	"metadata": {
		"version": 4.5,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "eaaa185f-9375-4e8f-af86-b9a8102c1f2f",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1,
			"widthSegments": 1,
			"heightSegments": 1,
			"depthSegments": 1
		},
		{
			"uuid": "3f1e33a7-b994-4133-8e11-9433c844d264",
			"type": "CylinderGeometry",
			"radiusTop": 1,
			"radiusBottom": 1,
			"height": 1,
			"radialSegments": 8,
			"heightSegments": 1,
			"openEnded": false,
			"thetaStart": 0,
			"thetaLength": 6.283185307179586
		}],
	"materials": [
		{
			"uuid": "b6ff355c-da46-4c1e-8fbf-4aea7eb3584b",
			"type": "MeshStandardMaterial",
			"color": 16711680,
			"roughness": 1,
			"metalness": 0,
			"emissive": 0,
			"envMapIntensity": 1,
			"depthFunc": 3,
			"depthTest": true,
			"depthWrite": true,
			"colorWrite": true,
			"stencilWrite": false,
			"stencilWriteMask": 255,
			"stencilFunc": 519,
			"stencilRef": 0,
			"stencilFuncMask": 255,
			"stencilFail": 7680,
			"stencilZFail": 7680,
			"stencilZPass": 7680
		},
		{
			"uuid": "1e2a5d0e-a57c-48d3-929a-9ed41f170d88",
			"type": "MeshStandardMaterial",
			"color": 4539717,
			"roughness": 1,
			"metalness": 0,
			"emissive": 0,
			"envMapIntensity": 1,
			"depthFunc": 3,
			"depthTest": true,
			"depthWrite": true,
			"colorWrite": true,
			"stencilWrite": false,
			"stencilWriteMask": 255,
			"stencilFunc": 519,
			"stencilRef": 0,
			"stencilFuncMask": 255,
			"stencilFail": 7680,
			"stencilZFail": 7680,
			"stencilZPass": 7680
		}],
	"object": {
		"uuid": "097a7a9b-b4e9-464e-a27e-a5a481804fab",
		"type": "Group",
		"name": "Arrow",
		"layers": 1,
		"matrix": [0.999999281731136,-0.0003071501623878138,0.0011585318251495962,0,0.0006131666816466497,1.9999996664899757,0.0009788087692017965,0,-0.0023173639051896223,-0.0009780976930391248,1.999998418286733,0,0,0,0,1],
		"children": [
			{
				"uuid": "ecf9a69e-ac44-48c9-87ff-009419a540d0",
				"type": "Mesh",
				"name": "Box",
				"layers": 1,
				"matrix": [0.09259408788009897,0.016053065379235766,-0.00017509182749502755,0,0.000017534678999883654,0.00003893102407720086,0.012842232074597094,0,0.004384089260297747,-0.025286657899582555,0.00007067010503802202,0,-0.35035506793616694,-0.009246300633908505,-0.00011165447071240318,1],
				"geometry": "eaaa185f-9375-4e8f-af86-b9a8102c1f2f",
				"material": "b6ff355c-da46-4c1e-8fbf-4aea7eb3584b"
			},
			{
				"uuid": "58b0a88d-7275-427f-a701-fc61db0d06f0",
				"type": "Mesh",
				"name": "Box",
				"layers": 1,
				"matrix": [0.09283804148059474,-0.014576522351323003,-0.00014044840446661804,0,0.000018960805658952046,-0.000002977040479081897,0.012842288712394394,0,-0.003980740452342096,-0.025353382537397492,5.698550165256776e-18,0,-0.3503057259926287,0.011648452299012369,-0.00011206221867069788,1],
				"geometry": "eaaa185f-9375-4e8f-af86-b9a8102c1f2f",
				"material": "b6ff355c-da46-4c1e-8fbf-4aea7eb3584b"
			},
			{
				"uuid": "86624043-2eaf-44a5-b100-4edf012d79fb",
				"type": "Mesh",
				"name": "Box",
				"layers": 1,
				"matrix": [0.09397551104178985,0,0,0,0,2.851564108096772e-18,0.012842303054647702,0,0,-0.025663988400802494,5.698550165256776e-18,0,0.5105040750765296,0.0004787634935134455,-0.0018157289671519444,1],
				"geometry": "eaaa185f-9375-4e8f-af86-b9a8102c1f2f",
				"material": "b6ff355c-da46-4c1e-8fbf-4aea7eb3584b"
			},
			{
				"uuid": "d2429d05-ba63-478b-aa58-54fb2ad85665",
				"type": "Mesh",
				"name": "Box",
				"layers": 1,
				"matrix": [0.09397551104178985,0,0,0,0,0.012842303054647702,0,0,0,0,0.025663988400802494,0,0.5105040750765296,0.0004787634935134455,-0.0018157289671519444,1],
				"geometry": "eaaa185f-9375-4e8f-af86-b9a8102c1f2f",
				"material": "b6ff355c-da46-4c1e-8fbf-4aea7eb3584b"
			},
			{
				"uuid": "a355f618-3e5c-4d74-8ad8-4469d92dc2f0",
				"type": "Mesh",
				"name": "Shaft",
				"layers": 1,
				"matrix": [-5.9952043329758445e-18,-9.992007221626408e-19,0.009,0,0.9952692970225544,0,7.18231078017007e-16,0,4.996003610813204e-19,0.009,1.9984014443252816e-18,0,0,0,0,1],
				"geometry": "3f1e33a7-b994-4133-8e11-9433c844d264",
				"material": "1e2a5d0e-a57c-48d3-929a-9ed41f170d88"
			}]
	}
}