import java.io.*;
public class Main{
    public static void main(String[] args)throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int[] arr =new int[N];
        for(int i =0; i<N; i++){
            arr[i]=Integer.parseInt(br.readLine());
        }
        quickSort(arr, 0, arr.length-1);
        for(int a : arr){
            bw.write(a+"\n");
        }
        bw.flush();
        bw.close();
    }
    public static void quickSort(int[]arr, int l, int r){
        if(l<r){
            int p = partition(arr,l,r);
            quickSort(arr, l, p-1);
            quickSort(arr,p+1,r);
        }
    }
    public static int partition(int[]arr,int l, int r){
        int pivot = arr[r];
        int i = l-1;
        for(int j=l; j<=r-1; j++){
            if(arr[j]<=pivot){
                i++;
                swap(arr, i, j);

            }
        }
        swap(arr, (i+1), r);
        return (i+1);
    }
    public static void swap(int[]arr, int i , int j){
        int tmp = arr[i];
        arr[i] =arr[j];
        arr[j] = tmp;
    }


}