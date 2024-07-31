# 문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42892

# 접근 방법
# 이진탐색트리 구현은 딕셔너리를 사용

# 풀이 코드
import sys
sys.setrecursionlimit(10**6)

L, R = 1, 2

def insert(tree, node, parent_idx):
    idx, x, y = node
    (p_x, p_y), left, right = tree[parent_idx]
    if p_x < x:
        if right != 0:
            insert(tree, node, right)
        else:
            tree[parent_idx][R] = idx
            tree[idx] = [(x, y), 0, 0]
    else:
        if left != 0:
            insert(tree, node, left)
        else:
            tree[parent_idx][L] = idx
            tree[idx] = [(x, y), 0, 0]


def pre_order(tree, node_idx):
    path = []
    if node_idx == 0:
        return path
    path.append(node_idx)
    path += pre_order(tree, tree[node_idx][L])
    path += pre_order(tree, tree[node_idx][R])
    return path


def post_order(tree, node_idx):
    path = []
    if node_idx == 0:
        return path
    path += post_order(tree, tree[node_idx][L])
    path += post_order(tree, tree[node_idx][R])
    path.append(node_idx)
    return path


def solution(nodeinfo):
    sorted_node_info = [[idx, info[0], info[1]] for idx, info in enumerate(nodeinfo, 1)]
    sorted_node_info.sort(key=lambda x: x[2])
    print(sorted_node_info)
    tree = dict()
    root_idx, root_x, root_y = sorted_node_info.pop()
    tree[root_idx] = [(root_x, root_y), 0, 0]

    while sorted_node_info:
        node = sorted_node_info.pop()
        insert(tree, node, root_idx)

    answer = [pre_order(tree, root_idx), post_order(tree, root_idx)]
    return answer
