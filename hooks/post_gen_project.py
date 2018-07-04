import os
import shutil

# Get the root project directory
PROJECT_DIRECTORY = os.path.realpath(os.path.curdir)

repo_name = '{{ cookiecutter.repo_name }}'
css_extension = '{{ cookiecutter.css_extension }}'


def remove_dir(project_directory, dir_name):
    """Remove a dir."""
    dir_location = os.path.join(project_directory, dir_name)
    if os.path.isdir(dir_location):
        shutil.rmtree(dir_location)


if css_extension != 'less':
    """Remove less files"""
    remove_dir(PROJECT_DIRECTORY, 'less')

if css_extension != 'sass':
    """Remove scss files"""
    remove_dir(PROJECT_DIRECTORY, 'sass')

if css_extension != 'none':
    """Remove css files"""
    remove_dir(PROJECT_DIRECTORY, 'css')
