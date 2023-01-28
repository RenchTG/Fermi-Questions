file = open("RawQuestions.txt", 'r')
out = open("FormattedQuestions.txt", 'w')

questions = ['','','','','']
answers = ['','','','','']
done = False

while True:
    for i in range (0, 5):
        a = file.readline().strip()
        if not a:
            done = True
            break
        answers[i] = a
    if (done): break
    for j in range (0, 5):
        q = file.readline().strip()
        questions[j] = q

    for k in range (0, 5):
        out.write("{\n")
        out.write("\tquestion: \"" + questions[k] + "\",\n")
        out.write("\tanswer: " + answers[k] + "\n")
        out.write("},\n")

print("Make sure to delete last comma!")