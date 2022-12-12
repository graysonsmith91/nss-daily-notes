/*
    Define a variable named `notes` and assign a value of an empty array
*/
const notes = []

/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

// topics: "task", "observation", "code", "learning", "feelings", "etc..."

const note1 = {
    id: 1,
    text: "I'm having a great day",
    author: "Grayson",
    date: "11/7/22",
    topics: ["observation", "learning", "feelings"]
}

const note2 = {
    id: 2,
    text: "I'm learning a lot today",
    author: "Grayson",
    date: "11/8/22",
    topics: ["observation", "learning", "code"]
}

notes.push(note1)
notes.push(note2)

const note3 = {
    id: 3,
    text: "I learned how to do nested loops",
    author: "Grayson",
    date: "11/9/22",
    topics: ["observation", "learning"]
}

const note4 = {
    id: 4,
    text: "I need to finish this chapter soon",
    author: "Grayson",
    date: "11/10/22",
    topics: ["task", "code"]
}

const note5 = {
    id: 5,
    text: "I am getting hungry :(",
    author: "Grayson",
    date: "11/11/22",
    topics: ["observation", "feelings"]
}

notes.push(note3)
notes.push(note4)
notes.push(note5)

//console.log(notes)

//set total number of topics to 0
let totalTopics = 0

//loop through every note and add the length of each topics section to the totalTopics variable.
for (const note of notes) {
    //console.log(`"${note.text}"`)
    totalTopics += note.topics.length;
    //for (const topic of note.topics) {
    //console.log(topic)
    //}
}


//calculate the average by dividing totalTopics by the length of the notes section which each have 1 topics section.
let averageTopics = totalTopics / notes.length

//set empty array for the notes we are searching for
const filteredNotes = []

//set criteria that we will search our notes object for
const criteria = "feelings"

//loop through our notes object and see if each note includes criteria, if it does push to filteredNotes array.
for (const note of notes) {
    if (note.topics.includes(criteria)) {
        filteredNotes.push(note)
    }
}

//console.log(filteredNotes)

console.log("***  Note Articles  ***")


//set variable to empty string so I can add to it
let allHTML = ""

//loop through each note of notes and add open article tag and note text.
for (const note of notes) {
    allHTML += `<article>\n\t${note.text}\n`

    //loop through topics and add to var section then add to allHTML
    for (const topic of note.topics) {
        const section = `\t<section>${topic}</section>\n`
        allHTML += section
    }
}


//add article closing tag at the end of whole article
allHTML += "</article>"

console.log(allHTML)