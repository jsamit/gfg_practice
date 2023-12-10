// Boyer-Moore Voting Algorithm.

public int majorityElement(int[] a, int size)
    {
        int candidate = 0;
        int count = 0;
        foreach(int num in a)
        {
            if(count == 0)
            {
                candidate = num;
                count++;
            }
            else 
            {
                count += (num == candidate) ? 1 : -1;
            }
            
            
            
        }
        count = 0;
        foreach(int num in a)
        {
            if(num == candidate)
                count++;
        }
        return count > (size/2) ? candidate : -1; 
    }
