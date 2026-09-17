--------------------
Extra: DitsFormSaver
--------------------
Version: 0.1 Alpha
Since:  May 5th, 2011
Author: Dit's Media <support@ditsmedia.nl>

Saves FormIt results and exports to CSV/XLS


*** Instructions ***

1) Install through package management
2) Add 'ditsformsaver' hook to you FormIt call
3) Go to components -> DitsFormSaver
4) Add a new form; "Name" is for reference purposes only. "Save these fields" should be a comma separated list of field names (name,email,color,etc) you want to save
5) Remember the form ID
6) Go to your form's html code and add a hidden field: <input type="hidden" name="dfsForm" value="1" /> where 1 is the ID of step 5
7) Submit your form a few times. The "saved results" counter on the components' page should update after a refresh
8) Right click on the form row and choose "Export to CSV" or "Export to XLS"
9) You can clear the current results if you like by choosing "Clear form results"



*** Example form ***

[[!FormIt?
  &hooks=`ditsformsaver`
  &validate=`name:required`
  &successMessage=`Form saved`
  &successMessagePlaceholder=`fi.successMessage`
]]

<h1>[[+fi.successMessage]]</h1>

<form method="post" action="[[~[[*id]]]]">

<input type="hidden" name="dfsForm" value="1" />

<p>Name:<br />
<input type="text" name="name" value="[[+fi.name]]" /></p>

<p>Color<br />
<input type="checkbox" name="color[]" value="blue" />Blue<br />
<input type="checkbox" name="color[]" value="green" />Green<br />
<input type="checkbox" name="color[]" value="yellow" />Yellow
</p>


<input type="submit" value="save" />
</form>