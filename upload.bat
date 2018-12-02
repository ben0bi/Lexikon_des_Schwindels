echo off
git add .
git commit -m %1
echo "++ STATUS ++"
git status
echo "++ Pushing.."
git push -u origin master
echo "done."
