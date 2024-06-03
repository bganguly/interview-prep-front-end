/*
given a fixed number of cars, numbered 1 through n, and a sequence  
representing the car #'s requested, return the number of requests rejected  
rejectcount (number of cars in fleet, sequence representing the car # requested)  
rejectcount(10, [1,5,6]) == 0 (no car requested twice)  
rejectcount(10, [1,5,5]) == 1 (car #5 can't be requested twice)  
rejectcount(10, [1,5,5,1]) == 2 (car #1 and #5 can't be requested twice)
*/