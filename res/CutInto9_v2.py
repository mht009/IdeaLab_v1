import cv2

# function to cut image into  2 columns and 5 rows


def cut(src, status):
    img = cv2.imread(str(src))

    # cv2.imread() -> takes an image as an input
    h, w, channels = img.shape

    halfWidth = w//2

    oneFifthHeight = h//5
    twoFifthHeight = (h*2)//5
    threeFifthHeight = (h*3)//5
    fourFifthHeight = (h*4)//5

    """
        -------------------------
        |           |           |
        |     1     |     2     |
        |           |           |
        -------------------------
        |           |           |
        |     3     |     4     |
        |           |           |
        -------------------------
        |           |           |
        |     5     |     6     |
        |           |           |
        -------------------------
        |           |           |
        |     7     |     8     |
        |           |           |
        -------------------------
        |           |           |
        |     9     |     10    |
        |           |           |
        -------------------------
    """

    # this will be the first column
    # left_part = img[:, :half]
    part1 = img[:oneFifthHeight, :halfWidth]
    part2 = img[:oneFifthHeight, halfWidth:]
    part3 = img[oneFifthHeight:twoFifthHeight, :halfWidth]
    part4 = img[oneFifthHeight:twoFifthHeight, halfWidth:]
    part5 = img[twoFifthHeight:threeFifthHeight, :halfWidth]
    part6 = img[twoFifthHeight:threeFifthHeight, halfWidth:]
    part7 = img[threeFifthHeight:fourFifthHeight, :halfWidth]
    part8 = img[threeFifthHeight:fourFifthHeight, halfWidth:]
    part9 = img[fourFifthHeight:, :halfWidth]
    part10 = img[fourFifthHeight:, halfWidth:]

    # str1 = str(src)[:-7]
    str1 = "imgs/r1_" + status
    cv2.imwrite(str1 + "_0" + '.jpg', part1)
    cv2.imwrite(str1 + "_1" + '.jpg', part2)
    cv2.imwrite(str1 + "_2" + '.jpg', part3)

    cv2.imwrite(str1 + "_3" + '.jpg', part4)
    cv2.imwrite(str1 + "_4" + '.jpg', part5)
    cv2.imwrite(str1 + "_5" + '.jpg', part6)

    cv2.imwrite(str1 + "_6" + '.jpg', part7)
    cv2.imwrite(str1 + "_7" + '.jpg', part8)
    cv2.imwrite(str1 + "_8" + '.jpg', part9)
    cv2.imwrite(str1 + "_9" + '.jpg', part10)

    cv2.waitKey(0)


source_off = 'res\IdeaLab_1_v1_off.png'
cut(source_off, "off")

source_on = 'res\IdeaLab_1_v1_on.png'
cut(source_on, "on")
