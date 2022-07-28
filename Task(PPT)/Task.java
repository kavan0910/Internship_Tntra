abstract class Info{
    String name;
    abstract void Getname();
}
class Student extends Info{
    int Rollno;
    void Getname(){
        System.out.println(this.name);
    }
    public void Getname(int Rollno){
        System.out.println(this.name);

    }
}
public class Task{
    public static void main(String args[]){
        Student s1 = new Student();
        Student s2 = new Student();
        s1.name = "Kavan";
        s1.Getname();
        s2.Rollno = 32;
        s2.name = "Parth";
        s2.Getname(32);
    }
}