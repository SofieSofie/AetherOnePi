gcc -shared -o hrngWindows.dll -Wl,--add-stdcall-alias -I"C:\Program Files\Java\jdk-1.8\include" -I"C:\Program Files\Java\jdk-1.8\include\win32" src/main/C/hrngWindows.c -lcrypt32