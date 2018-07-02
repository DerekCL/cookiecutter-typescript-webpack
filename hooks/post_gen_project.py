import os
import shutil

# Get the root project directory
PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)

static_root = '{{ cookiecutter.static_root }}'
css_extension = '{{ cookiecutter.css_extension }}'

def remove_dir(project_directory, dir_name):
    """Remove a dir."""
    dir_location = os.path.join(
        project_directory,
        dir_name
    )
    if os.path.isdir(dir_location):
        shutil.rmtree(dir_location)

if css_extension != 'less':
    """Remove less demo"""
    remove_dir(static_root, 'less')


if css_extension != 'sass':
    """Remove scss demo"""
    remove_dir(static_root, 'sass')

if css_extension != 'none':
    """Remove scss demo"""
    remove_dir(static_root, 'css')
