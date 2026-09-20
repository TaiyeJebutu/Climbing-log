# Route log

A free app for tracking indoor bouldering, route by route, across one or more gyms, together with your climbing group.

Everyone's progress syncs automatically. The app also works fully offline: log your climbs with no signal, and your changes upload when you're back online.

**Setting it up for the first time?** See [SETUP.md](SETUP.md). It's a one-off job for one person.

## Getting started

- **Joining a group:** open the invite link you were sent, sign in with Google and tap **Join group**.
- **Creating a group:** open the app, sign in, and enter a group name, your name and your first gym. Then share the invite link from the **Group** tab.

You only sign in once on each device, and that first sign-in needs an internet connection. After that, everything works offline.

**On an iPhone or iPad:** open the link in Safari, choose **Share → Add to Home Screen**, then open the app from your home screen and sign in there.

## The screen

- **Gym picker** (top): choose which gym you're looking at. The app remembers your last choice on each device.
- **Sync indicator** (next to the gym picker):
  - **Up to date:** everything is synced.
  - **Uploading…:** your changes are being sent.
  - **Offline** or **Offline, changes waiting:** you have no connection. Your changes are saved on the device and upload automatically later.
- **Tabs:** Routes, Stats, Archive and Group.

## Routes

Every route belongs to a gym and has a **grade** (VB, V0 to V10), a **colour** and a **location** within the gym.

Routes are numbered **left to right**, starting at #1 in each gym. When routes are added, moved or removed, the numbers update so they always run 1, 2, 3… without gaps. A route's number can change, but everyone's progress stays with the right route.

Any member of the group can add, edit, move and archive routes. Changes appear for everyone.

### Adding a route

1. Choose the gym with the gym picker, then tap **Add route** on the Routes tab.
2. Pick the grade and colour, and choose the location.
3. Check **Position from the left**. By default, a new route goes straight after the last route in its location. The app shows which number it will get.
4. Tap **Save route**, or **Save and add another** to keep going. With **Save and add another**, the next route goes straight after the one you just added, so you can work along a wall left to right.

### Colours and locations

Colours and locations are shared by all gyms in the group.

- **New colour:** tap **Add colour**, give it a name and pick its shade. For multicolour holds, such as black and purple, tap **Add another shade**. A colour can have up to three shades.
- **Change a colour's look:** select it and tap **Change shades of…**. Every route using that colour updates for everyone.
- **New location:** tap **Add location**.

A multicolour entry is its own colour, so "Black & purple" routes are filtered separately from plain black or purple ones.

### Editing, moving and archiving

Open a route and tap **Edit** to change its grade, colour, location or position.

When a route is taken down, tap **Archive route** on its edit screen (tap twice to confirm). It moves to the **Archive** tab with everyone's progress kept, showing the number it had, for example "was #12". The routes after it are renumbered.

### Finding a route

The Routes tab lists the selected gym's routes in number order, with a heading wherever the location changes. Use the filters to narrow the list by grade, colour, location or status.

## Logging your climbs

Tap a route, then use **Log a visit**:

- **Date** is today by default. Change it to log a past visit.
- **Attempts on this visit:** tap **+1** after each attempt, or type the number in. Use **−** to undo a tap.
- **Sent on this visit:** tick this when you top the route.

Changes save straight away, online or offline. Your visits are listed under **Your visits**. Tap one to edit it, or use **Delete** (tap twice).

| Status | Meaning |
| --- | --- |
| Not tried | Nothing logged yet |
| Working on it | Attempted but not sent, with total attempts so far |
| Sent | Topped, with the total attempts it took |
| Flashed | Sent on the very first attempt |

Only you can change your own log. Everyone in the group can see it in the group stats.

## Stats

At the top of the Stats tab, choose:

- **Gym:** one gym, or **All gyms** combined.
- **What to cover:**
  - **Current routes** covers routes on the walls now.
  - **Lifetime** covers every route, archived ones included.
  - **Time period** covers only attempts and sends made between two dates. Choose last month, last 3 months, this year or a custom range.

### Your stats

- Sends and flashes, plus your **hardest send** and **hardest flash**
- **Grade pyramid:** sends per grade, split into flashes and other sends
- **Completion by grade**, such as "6 of 9 sent"
- **Completion by location**
- **Average attempts to send**, by grade
- **Flash rate by grade**
- **Current projects:** routes you're working on, sorted by attempts
- **Activity:** attempts and new sends per visit date, or per month over longer ranges

### Group stats

- **Route view:** everyone's status on each route
- **Group completion by grade:** how many routes someone has sent, and how many climbers have sent at least half
- **Toughest routes:** most attempts per send, and fewest climbers who've topped them
- **Beta opportunities:** your projects that someone else has already sent, so you know who to ask
- **Side-by-side pyramids and completion** for everyone in the group

In the All gyms view, routes are labelled with their gym, for example "#4 Blue V3, Castle". Locations with the same name in different gyms are counted together.

## The Group tab

- **Invite link:** copy or share it with new members. Anyone with the link can join, so share it only with your group.
- **Gyms:** add a new gym or rename one. Gyms can't be deleted, so nobody's logs are lost by accident.
- **Members:** see who's in the group. The group's creator can remove members, and removed members can't rejoin with the link.
- **Your name:** change how you appear to others.
- **Backup:**
  - **Export backup** saves every gym's routes and your own log to a file.
  - **Restore backup** merges a backup back into your log.
- **Data from the previous version:** move data from the older, file-based version of the app, either from this device or from its exported files.
- **Account:** sign out, or leave the group. The creator can't leave.

## Backups

Everything is stored online and on each device, so you don't need to do anything to keep it safe. An occasional **Export backup** is still a sensible extra safety net.

## Tips

- Log at the wall with **+1** after each go. It works with no signal.
- Filter by **Working on it** to see your projects at a glance.
- If two routes look identical, the number tells them apart.
- Open the app once while online after it's updated, so the new version is saved for offline use.
