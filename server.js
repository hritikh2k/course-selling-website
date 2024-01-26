const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('project'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'home.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'about.html'));
});

app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'contact.html'));
});

app.get('/course.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'course.html'));
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'home.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'login.html'));
});

app.get('/playlist.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'playlist.html'));
});

app.get('/profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'profile.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'register.html'));
});

app.get('/teacher_profile.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'teacher_profile.html'));
});

app.get('/teachers.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'teachers.html'));
});

app.get('/update.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'update.html'));
});

app.get('/watch-video.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'project', 'watch-video.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
