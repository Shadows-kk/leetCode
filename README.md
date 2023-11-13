# leetCode

记录学习。数据结构与算法

## 公式

##### 回溯 

1.需要与结果匹配的全部路径

46全排列

```
let list = []
function backTrack(list,临时路径，输入){
	结束条件：
		临时路径，新增一个路径
	循环{
		选择一个数据（其他数据）；
		递归backTrack（list,临时路径，输入）；
		撤回选择的数据；
	}
}
backTrack（list,临时路径，输入）
```

2.不需要路径只需返回true或者false 

```
 
```

