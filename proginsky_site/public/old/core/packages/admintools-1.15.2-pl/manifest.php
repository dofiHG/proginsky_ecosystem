<?php return array (
  'manifest-version' => '1.1',
  'manifest-attributes' => 
  array (
    'changelog' => '1.15.2-pl
==============
- Fixed a bug with incorrect type check in the alternative permissions module.

1.15.1-pl
==============
- Fixed a bug with absent elements in the categories section [#23].
- Fixed email login security issue ("tpl.login.form" chunk must be updated).
- Other code optimization.

1.15.0-pl
==============
- Added an unread messages indicator.
- Fixed a bug with js files for backend users with restricted permissions (#19).
- Moved the AdminTools service class from the model folder to the service folder.

1.14.1-pl
==============
- Added a system setting to hide the lock menu item.
- Updated the "tpl.lockScreen" chunk. Don\'t forget to update it.

1.14.0-pl
==============
- Added ability to lock admin panel.

1.13.1-pl
==============
- Fixed a bug with the last update.

1.13.0-pl
==============
- Added a system setting to disable setting the authenticated user from "mgr" context for a guest user on a website.

1.12.2-pl
==============
- Optimized for utf8mb4.
- Fixed broken email authentication.
- Fixed bug with creating a new admin notes.

1.12.1-pl
==============
- Some bugfixes.

1.12.0-pl
==============
- Added package action management which allows to prevent from installing, uninstalling, updating and removing packages.

1.11.2-pl
==============
- Some code optimization (special thanks to Fi1osof).

1.11.1-pl
==============
- Fixed error in the names of the two last added system settings.
- Changed order of including css files.

1.11.0-pl
==============
- Added 2 system settings - "admintools_custom_css" and "admintools_custom_js" which allow to add to the manager interface custom style and javascript files.
- Tuned the purple theme.

1.10.1-beta
==============
- Added the \'purple\' color theme.
- Bugfixes.

1.10.0-beta
==============
- Added color themes.
- The resource tree can be moved to the right side.

1.9.0-pl
==============
- Added plugin interface with bound events.

1.8.2-pl
==============
- Added a checkbox "Create cache" to the resource form which allows to save the resource to the cache when you save it.
- Admin notes can be imported and exported.

1.8.1-beta
==============
- Fixed issue #8 with mbstring.

1.8.0-beta
==============
- Added alternative permissions for resources.
- Template link in the resource form is made as icon.
- The "description" and "introtext" fields now are resizable.

1.7.0-pl
==============
- Added animation for the main menu.
- Added system setting to disable templates and resources relationship.

1.6.0-pl
==============
- Added templates and resources relationship.

1.5.0-pl
==============
- Added user notes functionality.

1.4.1-pl
==============
- Made the alternate login interface in pure javascript. Remove the jQuery from the AdminLogin snippet.
- Automatic logout inactive or blocked user if he is logged in.

1.4.1-beta
==============
- Element names in the elements log are links now.
- Fixed bug of the email authorization.

1.4.0-beta
==============
- Backend users can authorize via email.
- Some code optimization.

1.3.0-pl
==============
- Added system setting for switching on/off the favorite elements function.
- Added ability to clear only the saved resource cache (system setting "clear_only resource_cache").
- Added system setting for hiding component description at menu "Extras".
- The list of the edited elements is getting from the system \'manager_log\' table.
- Added filter to the last edited elements grid.
- The user settings of the favorite elements and the system settings save to the extended field of the user (special thanks to Lukas Zahnd).
- Fixed some bugs (special thanks to Lukas Zahnd).

1.2.1-pl
==============
- Fixed bug with favorites elements.

1.2.0-pl
==============
- Added a log of recently edited elements to the tree toolbar.
- Switch off check the elements permission for users with sudo while the tree is building.
- Fixed some bugs.

1.1.1-pl
==============
- Fixed session array for admintools.

1.1.0-pl
==============
- Remember system settings state.
- Added system setting allowing to switch off check the elements permission while the tree is building.
- Show favorite elements without category folders.

1.0.2-pl
==============
- Personal setting for each user.

1.0.1-pl
==============
- Changed the cache path.

1.0.0-pl
==============
- Initial release.',
    'license' => 'GNU GENERAL PUBLIC LICENSE
   Version 2, June 1991
--------------------------

Copyright (C) 1989, 1991 Free Software Foundation, Inc.
59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.

Preamble
--------

  The licenses for most software are designed to take away your
freedom to share and change it.  By contrast, the GNU General Public
License is intended to guarantee your freedom to share and change free
software--to make sure the software is free for all its users.  This
General Public License applies to most of the Free Software
Foundation\'s software and to any other program whose authors commit to
using it.  (Some other Free Software Foundation software is covered by
the GNU Library General Public License instead.)  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
this service if you wish), that you receive source code or can get it
if you want it, that you can change the software or use pieces of it
in new free programs; and that you know you can do these things.

  To protect your rights, we need to make restrictions that forbid
anyone to deny you these rights or to ask you to surrender the rights.
These restrictions translate to certain responsibilities for you if you
distribute copies of the software, or if you modify it.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must give the recipients all the rights that
you have.  You must make sure that they, too, receive or can get the
source code.  And you must show them these terms so they know their
rights.

  We protect your rights with two steps: (1) copyright the software, and
(2) offer you this license which gives you legal permission to copy,
distribute and/or modify the software.

  Also, for each author\'s protection and ours, we want to make certain
that everyone understands that there is no warranty for this free
software.  If the software is modified by someone else and passed on, we
want its recipients to know that what they have is not the original, so
that any problems introduced by others will not reflect on the original
authors\' reputations.

  Finally, any free program is threatened constantly by software
patents.  We wish to avoid the danger that redistributors of a free
program will individually obtain patent licenses, in effect making the
program proprietary.  To prevent this, we have made it clear that any
patent must be licensed for everyone\'s free use or not licensed at all.

  The precise terms and conditions for copying, distribution and
modification follow.


GNU GENERAL PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
---------------------------------------------------------------

  0. This License applies to any program or other work which contains
a notice placed by the copyright holder saying it may be distributed
under the terms of this General Public License.  The "Program", below,
refers to any such program or work, and a "work based on the Program"
means either the Program or any derivative work under copyright law:
that is to say, a work containing the Program or a portion of it,
either verbatim or with modifications and/or translated into another
language.  (Hereinafter, translation is included without limitation in
the term "modification".)  Each licensee is addressed as "you".

Activities other than copying, distribution and modification are not
covered by this License; they are outside its scope.  The act of
running the Program is not restricted, and the output from the Program
is covered only if its contents constitute a work based on the
Program (independent of having been made by running the Program).
Whether that is true depends on what the Program does.

  1. You may copy and distribute verbatim copies of the Program\'s
source code as you receive it, in any medium, provided that you
conspicuously and appropriately publish on each copy an appropriate
copyright notice and disclaimer of warranty; keep intact all the
notices that refer to this License and to the absence of any warranty;
and give any other recipients of the Program a copy of this License
along with the Program.

You may charge a fee for the physical act of transferring a copy, and
you may at your option offer warranty protection in exchange for a fee.

  2. You may modify your copy or copies of the Program or any portion
of it, thus forming a work based on the Program, and copy and
distribute such modifications or work under the terms of Section 1
above, provided that you also meet all of these conditions:

    a) You must cause the modified files to carry prominent notices
    stating that you changed the files and the date of any change.

    b) You must cause any work that you distribute or publish, that in
    whole or in part contains or is derived from the Program or any
    part thereof, to be licensed as a whole at no charge to all third
    parties under the terms of this License.

    c) If the modified program normally reads commands interactively
    when run, you must cause it, when started running for such
    interactive use in the most ordinary way, to print or display an
    announcement including an appropriate copyright notice and a
    notice that there is no warranty (or else, saying that you provide
    a warranty) and that users may redistribute the program under
    these conditions, and telling the user how to view a copy of this
    License.  (Exception: if the Program itself is interactive but
    does not normally print such an announcement, your work based on
    the Program is not required to print an announcement.)

These requirements apply to the modified work as a whole.  If
identifiable sections of that work are not derived from the Program,
and can be reasonably considered independent and separate works in
themselves, then this License, and its terms, do not apply to those
sections when you distribute them as separate works.  But when you
distribute the same sections as part of a whole which is a work based
on the Program, the distribution of the whole must be on the terms of
this License, whose permissions for other licensees extend to the
entire whole, and thus to each and every part regardless of who wrote it.

Thus, it is not the intent of this section to claim rights or contest
your rights to work written entirely by you; rather, the intent is to
exercise the right to control the distribution of derivative or
collective works based on the Program.

In addition, mere aggregation of another work not based on the Program
with the Program (or with a work based on the Program) on a volume of
a storage or distribution medium does not bring the other work under
the scope of this License.

  3. You may copy and distribute the Program (or a work based on it,
under Section 2) in object code or executable form under the terms of
Sections 1 and 2 above provided that you also do one of the following:

    a) Accompany it with the complete corresponding machine-readable
    source code, which must be distributed under the terms of Sections
    1 and 2 above on a medium customarily used for software interchange; or,

    b) Accompany it with a written offer, valid for at least three
    years, to give any third party, for a charge no more than your
    cost of physically performing source distribution, a complete
    machine-readable copy of the corresponding source code, to be
    distributed under the terms of Sections 1 and 2 above on a medium
    customarily used for software interchange; or,

    c) Accompany it with the information you received as to the offer
    to distribute corresponding source code.  (This alternative is
    allowed only for noncommercial distribution and only if you
    received the program in object code or executable form with such
    an offer, in accord with Subsection b above.)

The source code for a work means the preferred form of the work for
making modifications to it.  For an executable work, complete source
code means all the source code for all modules it contains, plus any
associated interface definition files, plus the scripts used to
control compilation and installation of the executable.  However, as a
special exception, the source code distributed need not include
anything that is normally distributed (in either source or binary
form) with the major components (compiler, kernel, and so on) of the
operating system on which the executable runs, unless that component
itself accompanies the executable.

If distribution of executable or object code is made by offering
access to copy from a designated place, then offering equivalent
access to copy the source code from the same place counts as
distribution of the source code, even though third parties are not
compelled to copy the source along with the object code.

  4. You may not copy, modify, sublicense, or distribute the Program
except as expressly provided under this License.  Any attempt
otherwise to copy, modify, sublicense or distribute the Program is
void, and will automatically terminate your rights under this License.
However, parties who have received copies, or rights, from you under
this License will not have their licenses terminated so long as such
parties remain in full compliance.

  5. You are not required to accept this License, since you have not
signed it.  However, nothing else grants you permission to modify or
distribute the Program or its derivative works.  These actions are
prohibited by law if you do not accept this License.  Therefore, by
modifying or distributing the Program (or any work based on the
Program), you indicate your acceptance of this License to do so, and
all its terms and conditions for copying, distributing or modifying
the Program or works based on it.

  6. Each time you redistribute the Program (or any work based on the
Program), the recipient automatically receives a license from the
original licensor to copy, distribute or modify the Program subject to
these terms and conditions.  You may not impose any further
restrictions on the recipients\' exercise of the rights granted herein.
You are not responsible for enforcing compliance by third parties to
this License.

  7. If, as a consequence of a court judgment or allegation of patent
infringement or for any other reason (not limited to patent issues),
conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot
distribute so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you
may not distribute the Program at all.  For example, if a patent
license would not permit royalty-free redistribution of the Program by
all those who receive copies directly or indirectly through you, then
the only way you could satisfy both it and this License would be to
refrain entirely from distribution of the Program.

If any portion of this section is held invalid or unenforceable under
any particular circumstance, the balance of the section is intended to
apply and the section as a whole is intended to apply in other
circumstances.

It is not the purpose of this section to induce you to infringe any
patents or other property right claims or to contest validity of any
such claims; this section has the sole purpose of protecting the
integrity of the free software distribution system, which is
implemented by public license practices.  Many people have made
generous contributions to the wide range of software distributed
through that system in reliance on consistent application of that
system; it is up to the author/donor to decide if he or she is willing
to distribute software through any other system and a licensee cannot
impose that choice.

This section is intended to make thoroughly clear what is believed to
be a consequence of the rest of this License.

  8. If the distribution and/or use of the Program is restricted in
certain countries either by patents or by copyrighted interfaces, the
original copyright holder who places the Program under this License
may add an explicit geographical distribution limitation excluding
those countries, so that distribution is permitted only in or among
countries not thus excluded.  In such case, this License incorporates
the limitation as if written in the body of this License.

  9. The Free Software Foundation may publish revised and/or new versions
of the General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

Each version is given a distinguishing version number.  If the Program
specifies a version number of this License which applies to it and "any
later version", you have the option of following the terms and conditions
either of that version or of any later version published by the Free
Software Foundation.  If the Program does not specify a version number of
this License, you may choose any version ever published by the Free Software
Foundation.

  10. If you wish to incorporate parts of the Program into other free
programs whose distribution conditions are different, write to the author
to ask for permission.  For software which is copyrighted by the Free
Software Foundation, write to the Free Software Foundation; we sometimes
make exceptions for this.  Our decision will be guided by the two goals
of preserving the free status of all derivatives of our free software and
of promoting the sharing and reuse of software generally.

NO WARRANTY
-----------

  11. BECAUSE THE PROGRAM IS LICENSED FREE OF CHARGE, THERE IS NO WARRANTY
FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW.  EXCEPT WHEN
OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES
PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED
OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.  THE ENTIRE RISK AS
TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.  SHOULD THE
PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING,
REPAIR OR CORRECTION.

  12. IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MAY MODIFY AND/OR
REDISTRIBUTE THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES,
INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING
OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED
TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY
YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER
PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGES.

---------------------------
END OF TERMS AND CONDITIONS',
    'readme' => '--------------------
AdminTools
--------------------
Author: Sergey Shlokov <sergant210{at}bk.ru>
--------------------

A basic Extra for MODx Revolution Administrators.

Feel free to suggest ideas/improvements/bugs on GitHub:
http://github.com/sergant210/AdminTools/issues',
    'chunks' => 
    array (
      'tpl.login.form' => '<div id="container">
	<div id="modx-login-logo">
		<!--[if gte IE 9]><!--><img src="/manager/templates/default/images/modx-logo-color.svg" alt="MODX CMS/CMF"><!--<![endif]-->
		<!--[if lt IE 9]><img alt="MODX CMS/CMF" src="/manager/templates/default/images/modx-logo-color.png" /><![endif]-->
	</div>

	<div class="modx-form" id="modx-login-panel">
		<div class="panel-title">
			<h2>[[++site_name]]</h2>
		</div>
		<div id="errormsg">[[+errormsg]]</div>
		<div class="panel-body">
			<form method="post" action="" id="manager-login-form">
				<div class="login-form-item">
					<div class="login-form-element">
						<input type="text" placeholder="[[%admintools_username_email]]" class="form-text" name="userdata" id="userdata" autocomplete="on">
					</div>
				</div>
				<div class="form-action">
					<button id="send-email-btn" value="1" type="submit" class="primary-button login-form-btn" data-sending="[[%admintools_sending]]">[[%admintools_send_authorization_link]]</button>
				</div>
			</form>
		</div>
	</div>
</div>',
      'tpl.lockScreen' => '<!DOCTYPE html>
<html lang="[[+lang]]">
<head>
	<meta charset="UTF-8">
	<title>[[+title]]</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<style>
		.lockscreen {
			background-image: url([[+assets_url]]components/admintools/images/lockscreen.jpg);
		}
		@media only screen and (max-width : 767px) {
			.lockscreen {
				background-image: url([[+assets_url]]components/admintools/images/lockscreen800.jpg);
			}
		}
		@media only screen and (min-width : 768px) and (max-width: 1223px) {
			.lockscreen {
				background-image: url([[+assets_url]]components/admintools/images/lockscreen1280.jpg);
			}
		}
		.lockscreen .container {
			background-color: rgba(255,255,255,0.1);
			margin: 5% auto 0;
			padding: 20px;
			text-align: center;
			width: 250px;
		}
		.lockscreen .form-element {
			box-sizing: border-box;
			font-size: 14px;
			margin: 5px 0;
			padding: 6px 12px;
			width: 220px;
		}
		.lockscreen .username {
			font-size: 20px;
			color: #fff;
			padding: 10px;
		}
		.lockscreen input {
			border: 1px solid transparent;
		}
		.lockscreen input:focus {
			border-color: #45a2ec;
			outline: 0;
		}
		.lockscreen .btn {
			display: inline-block;
			color: #fff;
			background-color: #3697CD;
			font-weight: bold;
			line-height: 1.6;
			text-align: center;
			vertical-align: middle;
			cursor: pointer;
			border: 1px solid #3CA4DE;
		}
		.btn:hover {
			color: #fff;
			background-color: #286090;
			border-color: #1e4c74;
		}
	</style>
</head>
<body class="lockscreen">
<div class="container">
	<div class="photo"><img src="[[+photo]]" alt="avatar" onsubmit="return false;"></div>
	<div class="username">[[+username]]</div>
	<form name="unlockform" action="[[+form_action]]" method="POST">
		<div>
			<input id="unlock_code" class="form-element" type="password" name="unlock_code" placeholder="[[+input_placeholder]]" required>
		</div>
		<div>
			<button class="form-element btn submit-btn">[[%admintools_unlock]]</button>
		</div>
	</form>
</div>
<script>
	document.forms[0].addEventListener("submit", function(event) {
		event.preventDefault();
		let body = "admintools_action=unlock&action=mgr/system/unlock&unlock_code=" + encodeURIComponent(unlock_code.value) + "&HTTP_MODAUTH=[[+auth]]";
		let xhr = new XMLHttpRequest();
		xhr.open(this.getAttribute(\'method\'), this.getAttribute(\'action\'), true);
		xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
		xhr.setRequestHeader(\'Content-Type\', \'application/x-www-form-urlencoded\');
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				document.location.reload();
			}
		};

		xhr.send(body);
	});
</script>
</body>
</html>',
    ),
    'setup-options' => 'admintools-1.15.2-pl/setup-options.php',
  ),
  'manifest-vehicles' => 
  array (
    0 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modNamespace',
      'guid' => 'e2557f9bf326446c0a62476b1297992b',
      'native_key' => 'admintools',
      'filename' => 'modNamespace/fd1110ab1be5f8e5cea726ca27eac634.vehicle',
      'namespace' => 'admintools',
    ),
    1 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'f627b159e95a5941ed74984c527d7763',
      'native_key' => 'admintools_favorites_icon',
      'filename' => 'modSystemSetting/86b7aa97b94a069e9270b5c9a18c1ff9.vehicle',
      'namespace' => 'admintools',
    ),
    2 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'da5aa2520efe0ef47aef3984fc1514a6',
      'native_key' => 'admintools_check_elements_permissions',
      'filename' => 'modSystemSetting/6243d5482d7161b6cf0ba6d5fafd59d0.vehicle',
      'namespace' => 'admintools',
    ),
    3 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'd3fadff1a79e73948098b2146a0ee9c4',
      'native_key' => 'admintools_remember_system_settings',
      'filename' => 'modSystemSetting/4adb4db5222444b1d9931392b0656a5b.vehicle',
      'namespace' => 'admintools',
    ),
    4 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'ae10c1f901756f8eaeacee891de5b300',
      'native_key' => 'admintools_enable_elements_log',
      'filename' => 'modSystemSetting/ae1e582633e8378ef613f7dcae8a6ee5.vehicle',
      'namespace' => 'admintools',
    ),
    5 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'bc9ce23beece06aaec8ed730c9e7e271',
      'native_key' => 'admintools_enable_favorite_elements',
      'filename' => 'modSystemSetting/d3935690880e3556b2c57ea716121a1f.vehicle',
      'namespace' => 'admintools',
    ),
    6 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'a08668ed4d45c35a4fb9496e8ccd552f',
      'native_key' => 'admintools_clear_only_resource_cache',
      'filename' => 'modSystemSetting/39cd38a86e89d8f2d0ec39f72c3ea312.vehicle',
      'namespace' => 'admintools',
    ),
    7 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'cc55d8e60d5835a986d5f685fa977c12',
      'native_key' => 'admintools_hide_component_description',
      'filename' => 'modSystemSetting/3088e68bba0564300d6c70aa35b0c97d.vehicle',
      'namespace' => 'admintools',
    ),
    8 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'df46399e80eb00e73214d58bc1daa0b4',
      'native_key' => 'admintools_email_authorization',
      'filename' => 'modSystemSetting/ddff25424bbd6d08e4cbc685a49ca22e.vehicle',
      'namespace' => 'admintools',
    ),
    9 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'c0b1fc94fe82de0fabdca49e5ed1ce98',
      'native_key' => 'admintools_authorization_ttl',
      'filename' => 'modSystemSetting/da9157a0f497006cb648ec22aca3865d.vehicle',
      'namespace' => 'admintools',
    ),
    10 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'c18b5f088cd734e35c2bae6c9f831c9d',
      'native_key' => 'admintools_loginform_resource',
      'filename' => 'modSystemSetting/0e575a36fe055d2da09bab4ba1ddd8ab.vehicle',
      'namespace' => 'admintools',
    ),
    11 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '8d93675aa5ed6b2d6daa587a0401528d',
      'native_key' => 'admintools_enable_notes',
      'filename' => 'modSystemSetting/480c4971822a4fdf02fde46b6c6e6968.vehicle',
      'namespace' => 'admintools',
    ),
    12 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '56ed31c25cdec0f6b44e5477201d721c',
      'native_key' => 'admintools_template_resource_relationship',
      'filename' => 'modSystemSetting/c7093c7c255384ba6c1d7534529a4f50.vehicle',
      'namespace' => 'admintools',
    ),
    13 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '2f0f3f57ea8dea2b2f225dc8f62eaf1d',
      'native_key' => 'admintools_animate_menu',
      'filename' => 'modSystemSetting/eb0877f29c3ec6aa36ec769f31968127.vehicle',
      'namespace' => 'admintools',
    ),
    14 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'a4c282ac715600c2a441a54692263602',
      'native_key' => 'admintools_alternative_permissions',
      'filename' => 'modSystemSetting/13cbd56549fb4288e16a78e43ca8fff0.vehicle',
      'namespace' => 'admintools',
    ),
    15 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '4bfff149371ef07a893e5ed993b19766',
      'native_key' => 'admintools_plugins_events',
      'filename' => 'modSystemSetting/9d05f2b7bf4b62ab360a107efec0b97f.vehicle',
      'namespace' => 'admintools',
    ),
    16 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '737222385ded57e384c4f125da1e08b4',
      'native_key' => 'admintools_theme',
      'filename' => 'modSystemSetting/365d9c9f80b163fd905cc50e6efbb133.vehicle',
      'namespace' => 'admintools',
    ),
    17 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'c0c28e08acff277d14914fb0f9794771',
      'native_key' => 'admintools_modx_tree_position',
      'filename' => 'modSystemSetting/05dca1cd089bc3414d8c0e1882d374aa.vehicle',
      'namespace' => 'admintools',
    ),
    18 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'ea434f2790900a59fbce71c17f1a18e4',
      'native_key' => 'admintools_custom_css',
      'filename' => 'modSystemSetting/3e6190b4921f35de42f61e9bcc99249a.vehicle',
      'namespace' => 'admintools',
    ),
    19 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '691fd11ea1ba6214b2b2f29dfa51a1e7',
      'native_key' => 'admintools_custom_js',
      'filename' => 'modSystemSetting/e6cc300f1433c174bee36786ae146f0b.vehicle',
      'namespace' => 'admintools',
    ),
    20 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '0c84e245e26a35dd90673a6e30fd6d57',
      'native_key' => 'admintools_package_actions',
      'filename' => 'modSystemSetting/ca28628a5d63031d3648e7129edd4a54.vehicle',
      'namespace' => 'admintools',
    ),
    21 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'e501b9fcdc7da976ac4295761ae8d1a3',
      'native_key' => 'admintools_only_current_context_user',
      'filename' => 'modSystemSetting/ed9f0536f0f470ce624229f5d7a53de8.vehicle',
      'namespace' => 'admintools',
    ),
    22 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '4e9a2429c52443ab3034fbedf3548b35',
      'native_key' => 'admintools_show_lockmenu',
      'filename' => 'modSystemSetting/75cc192e0b2d520bb5912a73c9bef40c.vehicle',
      'namespace' => 'admintools',
    ),
    23 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => '4310d4b5d29075f940fdde259416a6d9',
      'native_key' => 'admintools_lock_timeout',
      'filename' => 'modSystemSetting/594a7a126389083698af32d387628267.vehicle',
      'namespace' => 'admintools',
    ),
    24 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modSystemSetting',
      'guid' => 'd2ebb79400aa195e3611a17658ea3a64',
      'native_key' => 'admintools_unlock_code',
      'filename' => 'modSystemSetting/771aa3c5061a9e6d4fbc858bfcb77e9c.vehicle',
      'namespace' => 'admintools',
    ),
    25 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modCategory',
      'guid' => 'edfac354c66edfc8e83f3029966cd36c',
      'native_key' => NULL,
      'filename' => 'modCategory/a873d756c29a09c91cedd4c3999662a2.vehicle',
      'namespace' => 'admintools',
    ),
  ),
);