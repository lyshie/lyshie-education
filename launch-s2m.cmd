@ECHO OFF

pip install --upgrade s2m
pip install --upgrade uflash
    
REM Auto launch s2m and Scratch2
IF EXIST  "%ProgramFiles(x86)%\Scratch 2\Scratch 2.exe" (
    s2m -l tw -s "%ProgramFiles(x86)%\Scratch 2\Scratch 2.exe"
) ELSE (
    s2m -l tw -s "%ProgramFiles%\Scratch 2\Scratch 2.exe"
)