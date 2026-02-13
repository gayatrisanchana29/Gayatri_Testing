public class Palin {
    public static void main(String[] args) {
        String[] testStrings = {"Racecar", "Hello", "A man, a plan, a canal: Panama", "12321", "Java"};

        System.out.println("Palindrome Checker:");
        System.out.println("-------------------");

        for (String text : testStrings) {
            boolean result = isPalindrome(text);
            System.out.println("\"" + text + "\" is a palindrome? " + result);
        }
    }

    public static boolean isPalindrome(String text) {
        if (text == null) {
            return false;
        }

        // Remove non-alphanumeric characters and convert to lowercase
        String cleanText = text.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        int left = 0;
        int right = cleanText.length() - 1;

        while (left < right) {
            if (cleanText.charAt(left) != cleanText.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
