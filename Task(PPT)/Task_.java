interface Info{
    void Work();
}
class Student implements Info{
    public void Work(){
        System.out.println("Studing");
    }
}
class Teacher implements Info{
    public void Work(){
        System.out.println("Teaching");
    }
}
public class Task_ {
    public static void main(String args[]){
    Student s1 = new Student();
    Teacher t1 = new Teacher();
    s1.Work();
    t1.Work();
    }
}
