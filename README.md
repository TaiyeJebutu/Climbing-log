# Climbing-log

Simple bouldering route tracker

# Route log

A simple app for tracking indoor bouldering progress, route by route, and sharing it with your climbing group.

It runs entirely in your browser. There are no accounts or servers, and it costs nothing. Your data is saved on your own device, and you share progress with the group by passing files around.

## Getting started

1. Open the app's link in your browser.
2. Enter your name. It's added to your results file so the group can tell whose results are whose.
3. Add your gym's routes yourself, or import a route file from someone in your group who already has them (see [Sharing with your group](#sharing-with-your-group)).

**On an iPhone or iPad:** open the link in Safari and choose **Share → Add to Home Screen**. The app then opens like a normal app, and Safari is much less likely to clear its saved data.

## Routes

Every route has a **grade** (VB, V0 to V10), a **colour** and a **location** in the gym.

Routes are numbered **left to right across the whole gym**, starting at #1. When routes are added or removed, the numbers update so they always run 1, 2, 3… without gaps. That means a route's number can change, but your progress always stays with the right route.

### Adding a route

1. On the **Routes** tab, tap **Add route**.
2. Pick the grade and colour, and choose the location.
3. Check **Position from the left**. By default, a new route goes straight after the last route in its location. You can put it anywhere in the order, and the app shows which number it will get.
4. Tap **Save route**, or **Save and add another** to keep going. With **Save and add another**, the grade, colour and location stay selected, and the next route goes straight after the one you just added. That makes it quick to work along a wall from left to right.

Use **Add location** to create a new area of the gym, such as "Cave" or "Slab wall".

### Colours

The app starts with a list of common colours. To add another:

1. Tap **Add colour** while adding or editing a route.
2. Give it a name and pick its shade.
3. For multicolour holds, such as black and purple, tap **Add another shade**. A colour can have up to three shades.

A multicolour entry is treated as its own colour, so "Black & purple" routes are filtered separately from plain black or purple ones.

To change how an existing colour looks, select it and tap **Change shades of…**. Every route using that colour updates to match.

### Editing, moving and removing routes

Open a route and tap **Edit** to change its grade, colour, location or position.

When a route is taken down, tap **Archive route** on its edit screen (tap twice to confirm). It moves to the **Archive** tab with your progress kept, and the routes after it are renumbered.

### Finding a route

The **Routes** tab lists routes in number order, with a heading wherever the location changes. Use the filters at the top to narrow the list by grade, colour, location or status.

## Logging your climbs

Tap a route to open it, then use **Log a visit**:

- **Date** is today by default. Change it to log a past visit.
- **Attempts on this visit:** tap **+1** after each attempt at the wall, or type the number in afterwards. Use **−** to undo a tap.
- **Sent on this visit:** tick this when you top the route.

Changes save straight away. Each date is a separate visit, and the full list appears under **Visits**. Tap a visit to edit it, or use **Delete** (tap twice) to remove it.

The route's status updates automatically from your log:

| Status | Meaning |
| --- | --- |
| Not tried | Nothing logged yet |
| Working on it | Attempted but not sent, with total attempts so far |
| Sent | Topped, with the total attempts it took |
| Flashed | Sent on the very first attempt |

Archived routes keep their full log, but new attempts can't be added to them.

## Stats

The **Stats** tab has a switch at the top:

- **Current gym** covers the routes on the walls now.
- **Lifetime** covers every route, archived ones included.
- **Time period** covers only attempts and sends made between two dates, on routes that were on the walls during that time. Choose last month, last 3 months, this year or a custom range.

### Your stats

- **Sends and flashes**, plus your **hardest send** and **hardest flash**
- **Grade pyramid:** sends per grade, split into flashes and other sends
- **Completion by grade**, such as "6 of 9 sent"
- **Completion by location**
- **Average attempts to send**, by grade
- **Flash rate by grade**
- **Current projects:** routes you're working on, sorted by attempts
- **Activity:** attempts and new sends per visit date, or per month over longer ranges

### Group stats

These appear once you've imported at least one other person's results.

- **Route view:** everyone's status on each route
- **Group completion by grade:** how many routes someone has sent, and how many climbers have sent at least half
- **Toughest routes:** most attempts per send, and fewest climbers who've topped them
- **Beta opportunities:** your projects that someone else has already sent, so you know who to ask
- **Side-by-side pyramids and completion** for everyone in the group

## Sharing with your group

Everything is shared through two kinds of file, on the **Files** tab. On phones that support it, a **Share…** button lets you send a file straight to a chat or another app.

### Route file

The route list, including numbering, colours, shades and locations.

- **When routes change**, whoever updated them taps **Export route list** and sends the file to the group.
- **Everyone else** taps **Import a file** and picks it. The app shows what will change (new routes, updated routes, routes moving to the archive) before applying anything.
- Importing a route file **never changes your own progress**.

Route numbers shift when routes change, so everyone should import the latest route file before comparing numbers or group stats.

### Results file

Your name and your full climbing log.

- Tap **Export my results** and send the file to the group.
- When you import someone else's results file, choose **Save as [name]'s results**. Their progress then appears in the group stats. Importing a newer file from the same person replaces their older results.
- You can remove someone's stored results from the **Group results** list.

## Backups

Your data is saved in your browser on your device. It can be lost if you:

- clear your browser's history or site data
- use private or incognito browsing
- switch to a different phone or browser
- don't open the app for a while on an iPhone (adding it to your home screen helps)

**Export both files regularly**, ideally after each gym visit, and keep them somewhere safe such as a cloud drive, email or your group chat. The Files tab shows when you last exported each one.

To restore on a new device:

1. Open the app and enter your name.
2. Import your **route file**.
3. Import your **results file** and choose **Restore as my log**. This replaces the current log on that device with the one in the file.

If you're joining for the first time, just import the group's latest route file.

## Tips

- Log at the wall with **+1** after each go. It's quicker than remembering afterwards.
- Filter by **Working on it** to see your projects at a glance.
- If two routes look identical (same grade, colour and location), the number tells them apart.
- Agree as a group who keeps the route list up to date, so there's always one latest route file.
