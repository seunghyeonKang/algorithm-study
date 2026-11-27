def solution(s):
    answer = ""
    if (len(s) % 2 == 1): answer = s[int((len(s) - 1) / 2)]
    if (len(s) % 2 != 1):
        for i in range(int((len(s) - 1) / 2), int((len(s) - 1) / 2) + 2):
            answer += s[i]
    return answer