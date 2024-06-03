/*
consider two workers A and B who each start and stop work at fixed time  
stamps indicated by time in minutes.   
thus A can start at 3 and end at 7.  
B can start at 5 and end at 24.  
Further A can take one break of 1 minute anytime.  
given a function overlap (start time of A, end time of A, start time of B,
end time of B, break minute of A)  , find the overlap between A and B  
eg : overlap(3,7,5,8,6) === 2   
(A and B formally overalp at minutes 5,6,7 but A is taking 
a break at minute 6- so they really work together at minutes 5 and 7- hence a total of 2 is the answer)
*/