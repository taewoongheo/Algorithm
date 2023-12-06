from sys import stdin as s

# input.txt file

n = int(s.readline().rstrip())
arr = list(map(int, s.readline().split()))
stack = []
answer = [-1] * n

for i in range(0, n):
    while stack and arr[stack[-1]] < arr[i]:
        answer[stack.pop()] = arr[i]
    stack.append(i)

print(*answer)
