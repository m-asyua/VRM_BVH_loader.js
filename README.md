# VRM_BVH_loader.js


You can try it on <a href="https://social-exp.site/VRM_BVH_loader.js/release0.9/index.html">this site</a>.

<img width="369" alt="tmp0" src="https://user-images.githubusercontent.com/83494645/143027611-ceb85e37-6672-4b83-8d3c-0a9da9671306.png">

<img width="372" alt="tmp1" src="https://user-images.githubusercontent.com/83494645/143027667-aea46c60-6d0e-44b1-8550-bd4e763a65e1.png">


A sample program to read VRM and BVH files.

- You need to get files regarding three-vrm.js (three.js, three-vrm.js, GLTFLoader.js, and BVHLoader.js).

- Please write a descripstion to use "VRM_BVH_loader.js"
```
<script src="VRM_BVH_loader.js"></script>
```
and use read_vrm_file_api,and  read_bvh_file_api to read VRM and BVH files.


```
....
read_vrm_file_api(0,input) 
....
....
read_bvh_file_api(0,input) 
....

```
Numbers(0-2) represent unique number for each VRM character(0-2).

- Please set positions and rotations for VRM characters 0-2. [] in characters_position means position.x, position.y, and position.z for each character. [] in characters_rotation means rotation.x, rotation.y and rotation.z. 

```
	let characters_position = [ 
		[-0.1 , 0.90 , -0.78],
		[ -0.4,  0.84, -0.42],
		[ 0.22,  0.78, -0.22]
	];

	let characters_rotation = [ 
		[0,         2.93,    0],
		[ 0,         4.670,   0],
		[ 0.0349,    6.57,    0]
	];

```

