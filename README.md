# Literal `<user>` Tag

SillyTavern normally treats the legacy `<user>` marker as a username macro.
This extension preserves `<user>` as a literal tag while leaving `{{user}}`
unchanged and functional.

## Example

Input:

```text
<user>Hello</user>
{{user}} spoke.
```

With the user name `Sol`, the prompt sent to the model becomes:

```text
<user>Hello</user>
Sol spoke.
```

Tag matching is case-insensitive. Opening tags such as `<USER>` are normalized
to lowercase `<user>` in the final prompt. Closing `</user>` tags are already
untouched by SillyTavern.

## Requirement

SillyTavern's **Experimental Macro Engine** must be enabled. It is enabled by
default in current releases. If it is disabled, the extension displays a
warning when SillyTavern loads.

## Termux installation

Run:

```bash
cd ~/SillyTavern/public/scripts/extensions/third-party
git clone https://github.com/User-Teixeira/SillyTavern-LiteralUserTag.git
```

Then restart SillyTavern and refresh the browser page.

To test it, place this in any prompt field and inspect the final prompt:

```text
<user>TEST A</user>
{{user}} TEST B
```

Expected result when the user name is `Sol`:

```text
<user>TEST A</user>
Sol TEST B
```

## Updating and removal

The extension does not modify SillyTavern core files, so normal SillyTavern
updates do not overwrite it.

Update:

```bash
cd ~/SillyTavern/public/scripts/extensions/third-party/SillyTavern-LiteralUserTag
git pull
```

Remove the extension folder to uninstall it.
