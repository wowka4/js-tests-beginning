
class Vowels {
    public static void main(String[] args) {
        System.out.println(getCount("abracadabra"));
    }

    public static int getCount(String str) {
        return (int) str.chars().filter(c -> "aeiou".indexOf(c) >= 0).count();
    }
}
