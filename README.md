# Pokemon Team Tracker

# Site description:
This website allows users to track their Pokémon teams for casual playthroughs, hardcore Nuzlocke runs, and everything in between. 
The teams page features six empty slots for each iteration of mainline Pokémon games. Users can add Pokémon to these slots and view each team member's base stats and typing. Users can switch up their teams by removing old team members and adding new ones.
The nuzlocke page features a form to add Nuzlocke encounters. Traditionally, this is the first Pokémon you encounter on each route and are therefore allowed to catch. Pokémon start as "alive," but then can be marked as "dead" if they faint in battle, indicating they can no longer be used for the rest of the Nuzlocke playthrough. Any Pokémon can be added as an encounter, regardless of whether they originally appear in that game. This is a design choice to allow the tracker to be compatible with ROM hacks that add Pokémon from more recent generations to older games. 

NOTE: Pokémon with spaces must be entered with hyphens (e.g. "Great-Tusk" or "Iron-Hands")

Users can login to save all teams and nuzlocke encounters they create. Otherwise, data WILL BE LOST upon refreshing or leaving the site. 

# How to run:
- Download the project files.
- Run ```npm run dev``` in the capstone directory.
- In a new terminal run ```cd server``` to switch to the server directory.
- Run ```npm run dev``` there  as well.
