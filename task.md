## Front-end task for Junior and Middleweight roles

Firstly, thanks for applying to work with us at BrightHR. We ask all potential candidates to complete a small task before the interview. This will form the basis of the technical part of the interview; thus avoiding the dreaded live interview kata!

We appreciate your time is precious so please don’t spend much more than an hour on it. Don’t worry; there are no right or wrong answers and you don’t have to ‘complete’ the task. Other than providing some form of testing for your code we’ll let you decide on what you want to focus on or show off.

When you’ve finished please make it available on something like GitHub and email a link back to us.

# The task

We have a section of our app where users can access documents that administrators have uploaded. Please make a web page which will do the following...

1. Display the files/folders
2. Allow a user to open a folder to see it’s contents
3. Sort by name/size/date
4. Filter by filename

The feedback is as follows:

Unfortunately, we will not be progressing with Ryan after this tech task.

1. Everything in one file
2. Functions to build JSX instead of components
3. Loading JSON into state for no reason
4. Storing derived data (sorted files) in state
5. useLayoutEffect instead of useEffect is wrong choice
6. Masses of work done in effect hook, including setting state
7. Tests are not really worth anything.

The following is an example JSON structure you may want to use, feel free to choose your own if you think of a more appropriate shape.

[
{  
 "type": "pdf",  
 "name": "Employee Handbook",  
 "added": "2017-01-06"
},
{  
 "type": "pdf",  
 "name": "Public Holiday policy",  
 "added": "2016-12-06"
},
{  
 "type": "folder",  
 "name": "Expenses",  
 "files":
[
{
"type": "doc",
"name": "Expenses claim form",
"added": "2017-05-02"
},
{
"type": "doc",
"name": "Fuel allowances",
"added": "2017-05-03"
}
]
},
{  
 "type": "csv",
"name": "Cost centres",  
 "added": "2016-08-12"
},
{  
 "type": "folder",  
 "name": "Misc",  
 "files":
[
{
"type": "doc",
"name": "Christmas party",
"added": "2017-12-01"
},
{
"type": "mov",
"name": "Welcome to the company!",
"added": "2015-04-24"
}
]
}
]
