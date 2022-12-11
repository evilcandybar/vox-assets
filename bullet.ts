export const BULLET = {
	"metadata": {
		"version": 4.5,
		"type": "Object",
		"generator": "Object3D.toJSON"
	},
	"geometries": [
		{
			"uuid": "38f5cffe-328f-43c6-9e9e-fd374d730757",
			"type": "CylinderGeometry",
			"radiusTop": 1,
			"radiusBottom": 1,
			"height": 1,
			"radialSegments": 8,
			"heightSegments": 1,
			"openEnded": false,
			"thetaStart": 0,
			"thetaLength": 6.283185307179586
		},
		{
			"uuid": "4cc1e417-f080-4933-a51e-2b77ecfb1ab2",
			"type": "SphereGeometry",
			"radius": 1,
			"widthSegments": 32,
			"heightSegments": 16,
			"phiStart": 0,
			"phiLength": 6.283185307179586,
			"thetaStart": 0,
			"thetaLength": 3.141592653589793
		}],
	"materials": [
		{
			"uuid": "4b5fd7c6-df21-497e-b7fb-32039d28d033",
			"type": "MeshStandardMaterial",
			"color": 0,
			"roughness": 1,
			"metalness": 0,
			"emissive": 4009216,
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
			"uuid": "baedb818-5e33-4405-9c56-975322e1b1c7",
			"type": "MeshStandardMaterial",
			"color": 0,
			"roughness": 1,
			"metalness": 0,
			"emissive": 3026478,
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
		"uuid": "f2a76712-08f5-4e82-898b-3354e712b9a2",
		"type": "Group",
		"name": "Group",
		"layers": 1,
		"matrix": [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
		"children": [
			{
				"uuid": "5fbe0d1f-c2e4-4d4d-bd6d-caedf847315c",
				"type": "Mesh",
				"name": "Cylinder",
				"layers": 1,
				"matrix": [0.05,0,0,0,0,4.4408920985006264e-17,-0.2,0,0,0.06,1.3322676295501878e-17,0,0,0,0,1],
				"geometry": "38f5cffe-328f-43c6-9e9e-fd374d730757",
				"material": "4b5fd7c6-df21-497e-b7fb-32039d28d033"
			},
			{
				"uuid": "824f6055-d6c4-48f9-9705-92275732a3f2",
				"type": "Mesh",
				"name": "Sphere",
				"layers": 1,
				"matrix": [0.05,0,0,0,0,0.06,0,0,0,0,0.08,0,0,0,0.0686769626525432,1],
				"geometry": "4cc1e417-f080-4933-a51e-2b77ecfb1ab2",
				"material": "baedb818-5e33-4405-9c56-975322e1b1c7"
			},
			{
				"uuid": "a71b16cc-6b98-45cb-afe7-d2ff41848114",
				"type": "Mesh",
				"name": "Sphere",
				"layers": 1,
				"matrix": [0.05,0,0,0,0,0.06,0,0,0,0,0.01,0,0,-0.0009189442275417958,-0.10151921768765726,1],
				"geometry": "4cc1e417-f080-4933-a51e-2b77ecfb1ab2",
				"material": "baedb818-5e33-4405-9c56-975322e1b1c7"
			}]
	}
}