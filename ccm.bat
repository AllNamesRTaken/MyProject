ECHO OFF
cls
ECHO Removing old output 'ccm.output'...
del ccm.output
ECHO done
ECHO.

ECHO Running CCM...
tools\ccm\CCM.exe ccm.config > ccm\ccm.xml
ECHO done
ECHO.