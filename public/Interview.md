# Possible Interview Questions with good answers

## Introduce yourself

Good afternoon, my name is Megh Rathod and I am a third year Computer Science and Engineering student at Shiv Nadar University. I am a full stack developer with some experience using Python and C++, but I majorly use Java and JavaScript for my projects depending on the application. I am also an active community member of Google Developer Student Club which I lead last year as its deputy lead and this year as the advisor. Currently I am also working on a research project with one of my professors on 5G technology.

## Talking about your projects

So I've worked on numerous multi-dimensional projects during the last three years of my college life. Three of which have been showcased on my resume which I'm proud of. The first one is a peer discovery protocol that I developed using Golang for a larger P2P application for file sharing that I'm still working on. The second one being chatX, which is a proof of concept for a communication framework that I developed using Java and Swing.

## Signalling Server for Peer Discovery

For any P2P network, peers need to be able to find each other before they can communicate. To cater to this difficulty I have developed a signaling server is a server that can be used to exchange the information used to connect the clients like SDP, ICE candidates, etc. The signaling server is a REST API that can be used to exchange this information.

So how does it work?
Signaling server listens to requests for creating rooms and adding peers to rooms. Once a room has been created, whenever a client goes to the file sharing link a GET request is made to the /ws/:room_id route with the mKey for a master or cKey for a client as query parameters. If the room exists, the client is added to the room and a WebSocket connection is established with the client.

## ChatX

ChatX is a proof of concept for a communication framework that I developed using Java and Swing. It is a chat application that uses a client-server architecture. My focus has been on using object-oriented design patterns and principles to develop a flexible framework that can be easily modeled for various other purposes.

Server is a multi-threaded server that can start various conversation threads whenever clients join the server. Whenever a client joins, the server creates a new thread for that client and adds the PrintWriter of the client to the list of clients. Whenever a client sends a message, the server places it in a queue and notifies the thread that the message is for. The thread then sends the message to all the clients in the list of clients.

## What are your strengths and weaknesses?  

My strengths are that I am a quick learner and I am able to adapt to new technologies and frameworks very quickly, this is quite evident from the fact that even though my core language is Java, I started working on the signalling server which I built using Go which I just started learning but don't have much expertise in. I am also a team player and I am able to work well with others.

My weaknesses are that I tend to lose the tenacity to work when I'm working alone, however as soon as I'm working with a team I am able to work with full tenacity.

Another one of my weaknesses is that once I take up a problem, I tend to get so deep into solving that problem that even during my sleep I try to work it out and which is good in a way and I'm trying my best to overcome it.

## Why should we hire you?

I believe that I am a good fit for this position because I am a quick learner and I am able to adapt to new technologies and frameworks very quickly, this is quite evident from the fact that even though my core language is Java, I started working on the signalling server which I built using Go which I just started learning but don't have much expertise in. I am also a team player and I am able to work well with others.

## Where do you see yourself in 5 years?

I see myself as a full stack developer working on a project at `XYZ Company` that I am passionate about. I also see myself as a team lead or a project manager in `XYZ Company`.